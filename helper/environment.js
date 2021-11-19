require("dotenv").config();

const envs = {
  FILE_LIST_TABLE: process.env.FILE_LIST_TABLE,
  BUCKET_NAME: process.env.BUCKET_NAME,
  ENV: process.env.ENV,
};

module.exports.getEnv = (name) => {
  const v = envs[name] || process.env[name];

  if (!v) {
    throw new Error(`Missing environment variable ${name}`);
  }

  return v;
}
