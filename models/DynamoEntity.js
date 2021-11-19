class DynamoEntity {
  constructor(db, tableName) {
    this.db = db;
    this.tableName = tableName;
  }

  async scanDB() {
    let result = [];
    const params = {
      TableName: this.tableName,
    };

    const response = await this.db.scan(params).promise();
    result = result.concat(response.Items);

    if (response.LastEvaluatedKey) {
      return this.scanPagination(result, response, params);
    }
    return result;
  }

  async scanPagination(result, response, params) {
    let paginationResult = result;
    while (response.LastEvaluatedKey) {
      params["ExclusiveStartKey"] = response.LastEvaluatedKey;
      response = await this.db.scan(params).promise();
      paginationResult = paginationResult.concat(response.Items);
    }
    return paginationResult;
  }
}

module.exports = DynamoEntity;
