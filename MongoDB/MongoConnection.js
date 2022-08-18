const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb://localhost:27017/';
const client = new MongoClient(url);

const main = async() => {

  await client.connect();
  return 'Connected successfully to server';
  
}

main()
  .then(console.log)
  .catch(console.error);
// .finally(() => client.close());

exports.main=main;
exports.client=client;