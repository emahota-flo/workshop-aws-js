const AWS = require("aws-sdk");
const { getEnv } = require("./environment");

function setUpDynamoDB() {
  if (getEnv('ENV') === 'local') {
    AWS.config.update({
      accessKeyId: "local",
      secretAccessKey: "local",
    });
  }
  AWS.config.update({
    region: process.env.REGION,
  });
  return new AWS.DynamoDB.DocumentClient({apiVersion: "2012-08-10"});
}

module.exports = {
  setUpDynamoDB,
};
