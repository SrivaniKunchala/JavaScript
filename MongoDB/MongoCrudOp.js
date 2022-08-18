const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017/'
const client = new MongoClient(url);

const database = 'JsDatabase';
const collectionName = 'Employee';

const insertRecords = async () => {
    await client.connect();
    const db = client.db(database);
    const collection = db.collection(collectionName);
    await collection.insertOne({"EmployeeId":101,"EmployeeName":"SriVani","Salary":45000,"TeamRole":"TeamLead"});
    await collection.insertOne({"EmployeeId":102,"EmployeeName":"Ashwini","Salary":40000,"TeamRole":"Memeber"});
    await collection.insertOne({"EmployeeId":103,"EmployeeName":"Swapna","Salary":35000,"TeamRole":"Member"});
    await collection.insertOne({"EmployeeId":104,"EmployeeName":"Chary","Salary":55000,"TeamRole":"Member"});
    await collection.insertOne({"EmployeeId":105,"EmployeeName":"Vikas","Salary":45000,"TeamRole":"Member"});

    return "Inserted SuccessfullY."
}
const updateRecords = async () =>{
    await client.connect();
    const db = client.db(database);
    const collection = db.collection(collectionName);
    await collection.updateOne({"EmployeeId":101},{$set:{"EmployeeId":106,"EmployeeName":"Karthik","Salary":42000,"TeamRole":"Member"}});
    return "Updated Successfully.";
}

const deleteRecords = async () => {
  await client.connect();
  const db = client.db(database);
  const collection = db.collection(collectionName);
  await collection.deleteOne({"EmployeeId":106});
  return "Deleted Successfully.";
}


const getOrders = async () => {
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(database);
    const collection = db.collection(collectionName);
    const findResult = await collection.find().toArray();
    return findResult;
  }
// insertRecords()
// .then(console.log).catch(console.error);

// updateRecords().then(console.log).catch(console.error);


//deleteRecords().then(console.log).catch(console.error);


  
  // getOrders()
  //   .then(console.log)
  //   .catch(console.error)
    //  .finally(() => client.close());
    