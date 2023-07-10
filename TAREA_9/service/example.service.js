const FileService = require('./file.service');

class ExampleService extends FileService {
  constructor() {
    super();
  }

  async getDirInfo() {
    const rawInfo = await this.readDirectory();
    let dirInfo = {};

    rawInfo.forEach((file, index) => {
      dirInfo[index] = file;
    });

    return dirInfo;
  }

  async getFile(fileName, fileType) {
    const fileData = await this.readFile(fileName, fileType);
    return fileData;
  }

  async updateData(fileName, fileType, newData){
    const files = await this.readDirectory();
    console.log(files);
    if(files.includes(fileName+"."+fileType)){

      const data = await this.readFile(fileName, fileType);
      const newsData = data +"\n"+ newData;
      const isDeleted = this.deleteFile(fileName, fileType);
      if (isDeleted) {
        await this.createFile(fileName, fileType, newsData);
        return `File ${fileName} updated`;
      } else {
      return 'Something went wrong';
      }
    } else {
      return 'File not found';
    }
  }

  async generateFile(fileName, fileType) {
    await this.createFile(fileName, fileType);
  }

  deleteFile(fileName, fileType) {
    const isDeleted = this.deleteRef(fileName, fileType);
    if (isDeleted) {
      return `File ${fileName} deleted`;
    } else {
      return 'Something went wrong';
    }
  }
}

module.exports = new ExampleService();
