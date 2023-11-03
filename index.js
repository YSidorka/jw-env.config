function initMongoDb(obj = {}) {
  try {
    const { dbUrl, dbName, secret, cert } = obj;
    return {
      dbUrl,
      dbName,
      cert,
      secret: secret || ''
    };
  } catch (err) {
    console.log(`Error initMongoDb:`, err.message);
    return {};
  }
}

module.exports = {
  initMongoDb
};
