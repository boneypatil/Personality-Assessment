
const config: any = {
  mongooseDebug: false,
};

if (typeof process.env.APP_HOST !== 'undefined') {
  config.host = process.env.APP_HOST;
}
if (typeof process.env.APP_PORT !== 'undefined') {
  config.port = process.env.APP_PORT;
}
if (typeof process.env.MONGO_DB_NAME !== 'undefined') {
  config.mongoDbName = process.env.MONGO_DB_NAME;
}
if (typeof process.env.MONGO_DB_URL !== 'undefined') {
  config.mongoDbUrl = process.env.MONGO_DB_URL;
}

export default config;
