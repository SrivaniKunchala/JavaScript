const sql = require('mssql')
const sqlConfig = {
  user: 'srivani',
  password: 'phani',
  database: 'JsDatabase',
  server: 'localhost',
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 3000
  },
  options: {
    encrypt: true, // for azure
    trustServerCertificate: true // change to true for local dev / self-signed certs
  }
}

const createTable = async () => {
    try {
     await sql.connect(sqlConfig)
     const table = await sql.query `create table Student ( studId int, studName varchar(20), department varchar(20),collegeName varchar(20))`
     console.log(table)
    } catch (err) {
  
     console.error(err);
    }
   }
   const insertValues = async () => {
    try{
        await sql.connect(sqlConfig)
        //const insert = await sql.query `insert into Student (studId , studName, department, collegeName) values (101,'Srivani','CSE','MLRIT')`
        const insert2 = await sql.query `insert into Student (studId , studName, department, collegeName) values (102,'Ashwini','ECE','MLRIT')`
        const insert3= await sql.query `insert into Student (studId , studName, department, collegeName) values (103,'Swapna','CSE','BVRIT')`
        const insert4 = await sql.query `insert into Student (studId , studName, department, collegeName) values (104,'Mahima','Mech','BVRIT')`
       // console.log(insert);
       console.log(insert2, insert3, insert4);
    } catch(err) {
        console.error(err);
    }
   }
   const showAll = async () => {
    try {
        await sql.connect(sqlConfig);
        const show = await sql.query `select * from Student`
        console.log(show);
    } catch (err) {
        console.error(err);
    }
   }
   const deleteRow = async () => {
    try {
        await sql.connect(sqlConfig);
        const del = await sql.query `delete Student where studId = 104`
        console.log(del);
    } catch(err) {
        console.log(err);
    }
   }
   const updateRow = async () => {
    try {
        await sql.connect(sqlConfig);
        const update = await sql.query `update Student set collegeName = 'JNTU-H' where studId = 103 `
        console.log(update);
    } catch (err) {
        console.error(err);
    }
   }
   const alterTable = async() => {
    try {
        await sql.connect(sqlConfig);
        const alter = await sql.query `alter table Student drop column collegeName`
        console.log(alter);
    } catch(err) {
        console.error(err);
    }
   }
  // createTable();
  // insertValues();
  //deleteRow();
  //updateRow();
  showAll();
  //alterTable();

