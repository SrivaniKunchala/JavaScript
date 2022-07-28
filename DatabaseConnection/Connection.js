const sql = require('mssql')
const sqlConfig = {
  user: 'srivani',
  password: 'phani',
  database: 'JsDatabase',
  server: 'localhost',
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  },
  options: {
    encrypt: true, // for azure
    trustServerCertificate: true // change to true for local dev / self-signed certs
  }
}

console.log('Sample log outside');

const getData = async () => {
 try {
  console.log('Sample');
  // make sure that any items are correctly URL encoded in the connection string
  await sql.connect(sqlConfig)
  const result = await sql.query `select * from Employee`
  console.log(result)
 } catch (err) {
  // ... error checks
  console.error(err);
 }
}

getData();