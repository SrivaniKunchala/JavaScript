 const sql = require('mssql');
// const sqlConfig = require('./Connection').sqlConfig;
const sqlConnection = require('./Connection');

// const con = async () => await sql.connect(sqlConfig);
// console.log(con());

const getData = async () => {
    const pool = await sqlConnection.conn();
    const result = await pool.request()
            .input('empId', sql.Int, 101)
            .input('empName', sql.VarChar, 'Jimin')
            .query('select * from Employee where empId = @empId or empname = @empName');
    return result;
   
}

getData().then(result => console.table(result.recordset));


