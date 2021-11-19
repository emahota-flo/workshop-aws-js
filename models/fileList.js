const DynamoEntity = require("./DynamoEntity");


class FileList extends DynamoEntity {
  constructor(db, tableName) {
    super(db, tableName);
  }

  async putFileInfo(fileName) {
    const Item = {
      id: fileName,
    };
    const params = {
      TableName: this.tableName,
      Item,
    };

    return this.db.put(params).promise();
  }
}

module.exports = FileList;
