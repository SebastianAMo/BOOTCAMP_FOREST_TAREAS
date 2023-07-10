const router = require('express').Router();
const exampleService = require('../service/example.service');

router.get('/', async (req, res, err) => {
  const dirInfo = await exampleService.getDirInfo();
  res.status(200).json(dirInfo);
});

router.get('/data', async (req, res, err) => {
  const fileName = req.body.fileName;
  const fileType = req.body.fileType;
  const fileData = await exampleService.getFile(fileName, fileType);
  res.status(200).json(fileData);
});

router.post('/', async (req, res, err) => {
  const fileName = req.body.fileName;
  const fileType = req.body.fileType;
  await exampleService.generateFile(fileName, fileType);
  res.status(201).json({
    status: 'File created',
  });
});

router.patch('/', async (req, res, err) => {
  const fileName = req.body.fileName;
  const fileType = req.body.fileType;
  const newData = req.body.newData;
  const fileStatus = await exampleService.updateData(fileName, fileType, newData);
  res.status(200).json(fileStatus);
});


router.delete('/', (req, res, err) => {
  const fileName = req.body.fileName;
  const fileType = req.body.fileType;
  const fileStatus = exampleService.deleteFile(fileName, fileType);
  res.status(200).json(fileStatus);
});

module.exports = router;
