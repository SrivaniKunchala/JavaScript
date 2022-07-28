const sql = require('mssql')
const sqlConfig = {
  user: 'srivani',
  password: 'phani',
  database: 'JsDatabase',
  server: 'localhost',
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 1000
  },
  options: {
    encrypt: true, // for azure
    trustServerCertificate: true // change to true for local dev / self-signed certs
  }
}

const innerJoin = async() => {
    try {
        await sql.connect(sqlConfig);
        const innerj = await sql.query ` select BTS.Sname,Manager.ManagerName,BTS.Major from BTS inner join Manager on BTS.Id = Manager.Id `
        console.log("Inner Join  ",innerj);
    } catch (err){
        console.error(err);
    }
}
const leftJoin = async() => {
    try {
        await sql.connect(sqlConfig);
        const leftj = await sql.query ` select BTS.Sname,Manager.ManagerName,BTS.Major from BTS left join Manager on BTS.Id = Manager.Id `
        console.log("Left Join  ",leftj);
    } catch (err){
        console.error(err);
    }
}
const rightJoin = async() => {
    try {
        await sql.connect(sqlConfig);
        const rightj = await sql.query ` select BTS.Sname,Manager.ManagerName,BTS.Major from BTS right join Manager on BTS.Id = Manager.Id `
        console.log("Right Join  ",rightj);
    } catch (err){
        console.error(err);
    }
}
const fullOuterJoin = async() => {
    try {
        await sql.connect(sqlConfig);
        const fullOuter = await sql.query ` select BTS.Sname,Manager.ManagerName,BTS.Major from BTS full outer join Manager on BTS.Id = Manager.Id `
        console.log("Full Outer Join  ",fullOuter);
    } catch (err){
        console.error(err);
    }
}
const selfJoin = async() => {
    try {
        await sql.connect(sqlConfig);
        const selfj = await sql.query ` select * from BTS, Manager where Manager.ManagerName like 'S%' order by BTS.Age ASC `
        console.log("Self Join  ",selfj);
    } catch (err){
        console.error(err);
    }
}
innerJoin();
leftJoin();
rightJoin();
fullOuterJoin();
selfJoin();