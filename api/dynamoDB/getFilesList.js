const { setUpDynamoDB } = require("../../helper/db");
const FileList = require("../../models/fileList")
const { getEnv } = require("../../helper/environment");

module.exports.getFilesList = async (event) => {
  console.log('getFilesList event', event);
  try {
    const dynamoDB = setUpDynamoDB();
    const fileListTable = new FileList(dynamoDB, getEnv('FILE_LIST_TABLE'));

    return await fileListTable.scanDB();
  } catch (error) {
    console.log('getFilesList error', error);
  }
}
