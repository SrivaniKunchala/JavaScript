const {MongoClient} = require('mongodb');
const client  = require('./MongoConnection').client;

// console.log(MonConfig);
const db = client.db("JsDatabase");
const collection = db.collection("orders");

const getOrders = async () => {
     await client.connect();
    const findResult = await collection.find().toArray();
    return findResult;
  }
  const aggorders1 = async () => {
    await client.connect();
   const criteria = [
    {$match: {"ShipCity":"Reims","ShipCountry":"France"}}];
   const count = collection.aggregate(criteria);
   for await (const res of count){
    console.log(res);
   }
   
  }
  const aggorders2 = async() => {
    await client.connect();
    const criteria = [
        { "$match": { "ShipCountry": "USA" , OrderID: 11077} },
        {$group: {
        _id: "$ShipName", count: { $sum: 1 }
  }}];
  const res = collection.aggregate(criteria);
  for await (const r of res){
    console.log(r);
  }

  }


  //getOrders().then(console.log).catch(console.error);
//aggorders1().then(res=()=> console.log(res)).catch(console.error);
aggorders2().then(res=()=>console.log(res)).catch(console.error);