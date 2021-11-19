const { setUpDynamoDB } = require("../../helper/db");
const FileList = require("../../models/fileList")
const { getEnv } = require("../../helper/environment");

module.exports.createItem = async (event) => {
  console.log('createItem event', event);
  try {
    const { fileName } = event.body;
    const dynamoDB = setUpDynamoDB();
    const fileListTable = new FileList(dynamoDB, getEnv('FILE_LIST_TABLE'));

    return await fileListTable.putFileInfo(fileName)
  } catch (error) {
    console.log('createItem error', error);
  }
};
