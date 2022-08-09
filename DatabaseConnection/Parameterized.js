const sql = require('mssql')
const sqlCon = require('./Connection');

const deleteRow = async () => {
  const pool = await sqlCon.conn();
  const del = await pool.request()
  .input('studId', sql.Int, 102)
  .query('delete Student where studId = @studId');  
  console.log(del); 
}
deleteRow().then(res => console.log(res));

const updateRow = async () => {
  const pool = await sqlCon.conn();
  const update = await pool.request()
  .input('department',sql.VarChar,'ECE')
  .input('studId',sql.Int,103)
  .query('update Student set department=@department where studId = @studId');
  console.log(update);
}
updateRow().then(res => console.log(res));

const selectAll = async () => {
  const pool = await sqlCon.conn();
  const show = await pool.request()
  .query('select * from Student');
  console.log(show);
}
selectAll().then(result => console.table(result));
