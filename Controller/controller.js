const customRefrences=require('../References/AllUsedReferences')
// const dataConnection=require('../config/DataConnection')

const mongoObj=require('mongodb')
const StudentModel=require('../Models/StudentModel');
// ======================       create student data        ====================================   


const createData=async(request)=>{
//  let insertedData=0;
//  const db= await dataConnection.createConnection()
//  const collection = db.collection("students");
//  let insertedResult=await collection.insertOne({"name":request.name,"age":request.age,"city":request.city,"email":request.email})
// if(await insertedResult .acknowledged==true)
// {
//     insertedData=1;
// }
// return insertedData
const instance=new StudentModel.StudentModel(request);

return await instance.save()

}
//  =============================      read student data    =======================
const viewData=async()=>{
    // const db= await dataConnection.createConnection();
    //   const collection = db.collection("students");
    //   console.log(collection);
    //   let alldata=await collection.find().toArray();
    // console.log(alldata)
    // return alldata
    // return (await collection.find().toArray())
    return await StudentModel.StudentModel.find()
    }

    const updataData=async(request)=>{
    //     let UpdateData=0;
    //     const db= await dataConnection.createConnection();
    //     const collection = db.collection("students");
    //     let UPResult=await collection.updateOne({"_id":mongoObj.ObjectId(request._id)},{$set:{"age":request.age,"city":request.city,"name":request.name,"email":request.email}})
    //    if(await UPResult .acknowledged==true)
    //    {
    //        UpdateData=1;
    //    }
    //    return UpdateData
    const updateResult = await StudentModel.StudentModel.updateOne({ _id:mongoObj.ObjectId(request._id)},{ $set: {"age":request.age,"name":request.name,"city":request.city,"email":request.email} });

       return await updateResult;
       }

//  ============================           delete student data        =============================

 const deleteData=async(request)=>{
//     let DeletedData=0;
//     const db= await dataConnection.createConnection();
//     const collection = db.collection("students");
//     let DeleteResult=await collection.deleteOne({"_id":mongoObj.ObjectId(request._id)})
//    if(await DeleteResult .acknowledged==true)
//    {
//        DeletedData=1;
//    }
//    return DeletedData
const deleteResult = await StudentModel.StudentModel.deleteOne({ _id:mongoObj.ObjectId(request._id)});
return deleteResult;
   
   }


   const clearAll=async()=>{
    
    const db= await dataConnection.createConnection();
    const collection = db.collection("students");
    let DeleteResult=await collection.deleteMany({})
  return DeleteResult
   
   }


module.exports={
    "createData":createData,
    "viewData":viewData,
    "updataData":updataData,
    "deleteData":deleteData,
    "clearAll":clearAll,
    
}