const { setUpDynamoDB } = require("../../helper/db");
const FileList = require("../../models/fileList");
const { getEnv } = require("../../helper/environment");

module.exports.s3ToDynamoDB = async (event) => {
  console.log('s3ToDynamoDB event', JSON.stringify(event));
  try {
    return await Promise.all(event.Records.map((record => {
      const fileName = record.s3.object.key;
      const dynamoDB = setUpDynamoDB();
      const fileListTable = new FileList(dynamoDB, getEnv('FILE_LIST_TABLE'));

      return fileListTable.putFileInfo(fileName);
    })))
  } catch (error) {
    console.log('s3ToDynamoDB error', error);
  }
}
