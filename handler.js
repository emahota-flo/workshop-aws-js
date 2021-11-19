require('dotenv').config();

module.exports.hello = async (event) => {
  return {
    test: process.env.TEST_ENV
  };
};
