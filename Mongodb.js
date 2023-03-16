// const { MongoClient } = require("mongodb");
// const url = "mongodb://localhost:27017";
// const client = new MongoClient(url);
// const dbName = "mydb";
// const connection = "dummy";

// const createConnection = async () => {
//   let isConnected = await client.connect();
//   console.log("$$$$$$$$");
//   console.log(isConnected);
//   console.log("$$$$$$$$");

//   const db = client.db(dbName);
//   const collection = db.collection(connection); 
//   console.log(collection);

  //  let alldata=await collection.insertOne({name:"zonia",password:"zonia45",email:"zonia@gmail.com"})
  //  console.log(alldata);

  // let alldata=await collection.updateOne({name:"zonia"},{$set:{password:"zonia4125"}})
  // console.log(alldata)

  // let alldata=await collection.find({name:"Alisha"}).toArray();
  // console.log(alldata)

  // let alldata=await collection.deleteOne({name:"zonia"});
  // console.log(alldata)

  // let alldata=await collection.updateMany({name:"zonia"},{$set:{password:"zoniahogya"}})
  //  console.log(alldata)

  //  let alldata=await collection.deleteMany({name:"zonia"})
  //  console.log(alldata)

  // let isConnected=client.connect().then((response)=>{
  //     console.log("$$$$$$$$")
  //     console.log(response)
  //     console.log("$$$$$$$$")
  // })
  //     .catch((error)=>{
  //         console.log(error)
  //     });
  // console.log(isConnected)
// };
// createConnection();
