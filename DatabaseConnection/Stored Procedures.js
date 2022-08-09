const sql = require('mssql');
const sqlConnection = require('./Connection');

const getAllStudentData = async () => {
    const pool = await sqlConnection.conn();
    const result = await pool.request()
               .query('exec StudentDetails');
    return result;
   
}
const getStudentById = async () => {
    const pool = await sqlConnection.conn();
    const result = await pool.request()
               .query('exec StudentDetailsById @studId = 103');
    return result;
   
}
const getStudentByDept = async () => {
    const pool = await sqlConnection.conn();
    const result = await pool.request()
               .query('exec StudentWithDept @dept = "CSE"');
    return result;
   
}

getAllStudentData().then(result => console.table(result.recordset));
getStudentById().then(result => console.table(result.recordset));
getStudentByDept().then(result => console.table(result.recordset));