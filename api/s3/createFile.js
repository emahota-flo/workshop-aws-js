const S3Service = require('../../services/s3.service');

module.exports.createFile = async (event) => {
  console.log('createFile event', event);
  try {
    const s3Service = new S3Service();
    const { fileName, text } = event.body;

    return await s3Service.createFile(fileName, text);
  } catch (error) {
    console.log('createFile error', error);
  }
}
