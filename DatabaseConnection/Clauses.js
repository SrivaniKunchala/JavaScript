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

const andClause = async () => {
    try {
        await sql.connect(sqlConfig);
        const res1 = await sql.query `select empName,salary FROM Employee where empName like 'J%' And salary >30000`
        console.log(res1);
    } catch (err) {
        console.error(err);
    }
}
const orClause = async () => {
    try {
        await sql.connect(sqlConfig);
        const res2 = await sql.query `select empName,salary FROM Employee where empName like 'J%' OR salary >30000`
        console.log(res2);
    } catch(err) {
        console.error(err);
    }
}
const notClause = async () => {
    try {
        await sql.connect(sqlConfig);
        const res = await sql.query `select empName,salary FROM Employee Where NOT empName like 'T%' `
        console.log(res);
    } catch(err) {
        console.error(err);
    }
}
const orderBy = async () => {
    try {
        await sql.connect(sqlConfig);
        const res = await sql.query `select * from Employee2 order by empName ASC `
        console.log(res);
    } catch(err) {
        console.error(err);
    }
}
const top = async () => {
    try {
        await sql.connect(sqlConfig);
        const res = await sql.query `select top 3 empName,salary from Employee2 where salary = 30000 `
        console.log(res);
    } catch(err) {
        console.error(err);
    }
}
const minMax = async () => {
    try {
        await sql.connect(sqlConfig);
        const res = await sql.query `select min(salary) As MinimunSalary from Employee `
        const res1 = await sql.query `select max(salary) As MaximunSalary from Employee`
        console.log(res,res1);
    } catch(err) {
        console.error(err);
    }
}
const count = async () => {
    try {
        await sql.connect(sqlConfig);
        const res = await sql.query `select count(empId) As NoOfEmployees from Employee `
        console.log(res);
    } catch(err) {
        console.error(err);
    }
}
const avgSumWild = async () => {
    try {
        await sql.connect(sqlConfig);
        const res = await sql.query `select avg(salary) As AverageSalary from Employee2 `
        const res1 = await sql.query `select sum(salary) as SumOfSalary from Employee2`
        const res2 = await sql.query `select * from Employee where empName LIKE '%i%'`
        console.log(res,res1,res2);
    } catch(err) {
        console.error(err);
    }
}
const inNotIn = async () => {
    try {
        await sql.connect(sqlConfig);
        const res = await sql.query `select * from Employee where empName In ('Jungkook','Jimin','Jin') `
        const res1 = await sql.query `select * from Employee where empName not In ('Jungkook','Jimin','Jin')`
        console.log(res,res1);
    } catch(err) {
        console.error(err);
    }
}
const betweenNot = async () => {
    try {
        await sql.connect(sqlConfig);
        const res = await sql.query `select * from Employee2 where salary between 30000 and 40000 `
        const res1 = await sql.query `select * from Employee2 where salary not between 30000 and 40000`
        console.log(res,res1);
    } catch(err) {
        console.error(err);
    }
}
//andClause();
//orClause();
//notClause();
//orderBy();
//top();
//minMax();
//count();
//avgSumWild();
//inNotIn();
betweenNot();