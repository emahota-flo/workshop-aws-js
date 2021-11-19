const S3 = require("aws-sdk/clients/s3");
const { getEnv } = require("../helper/environment");
const AWS = require("aws-sdk");

class S3Service {
  constructor() {
    if (getEnv('ENV') === 'local') {
      AWS.config.update({
        accessKeyId: "local",
        secretAccessKey: "local",
      });
    }
    this.s3 = new S3();
  }

  async createFile(fileName, text) {
    const params = {
      Bucket: getEnv('BUCKET_NAME'),
      Key: fileName,
      Body: text
    };
    return this.s3.upload(params).promise();
  }
}

module.exports = S3Service;
