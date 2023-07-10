const { config } = require('../config');
const fs = require('fs');

class FileService {
  constructor() {
    this.basePath = `${process.cwd()}/${config.dataPath}`;
  }

  async readDirectory() {
    const files = await fs.readdirSync(this.basePath);
    return files;
  }

  async readFile(fileName, fileType) {
    const dataFile = await fs.readFileSync(this.basePath+'/' +fileName+'.'+fileType, 'utf-8'); 
    return dataFile;

  }

  async createFile(fileName, fileType, data = '') {
    await fs.writeFileSync(`${this.basePath}/${fileName}.${fileType}`, data);
  }

  deleteRef(fileName, fileType) {
    let deleted = true;
    fs.unlink(`${this.basePath}/${fileName}.${fileType}`, (err) => {
      if (err) {
        deleted != deleted;
      }
    });

    return deleted;
  }
}

module.exports = FileService;
