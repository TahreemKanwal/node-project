// const AllUsedReferences=require('../References/AllUsedReferences');
const fsCustomRef=require('./References/AllUsedReferences');
const mysql= require('mysql');
const { express } = require('./References/AllUsedReferences');
fsCustomRef.app.use(express.json())
const con = mysql.createConnection({
  host: 'localhost',
  user:'root',
  port:'3306',
  database : 'studentdb'
});
 con.connect((error)=>{
  if(error){
     console.warn("error")
  }
  else{
    console.log("connected");
  }
 });
// STARTS CRUD OPERATION PERFORMED INTO PHPMYADMIN
// ------------------------------insert===============================================
//  con.query("INSERT INTO `students_table`(`id`, `name`, `email`, `password`) VALUES ('3','Shamama','Shamama@gmail.com','12378954')",(err,result)=>{
//   console.log("Result",result)
//  })
// ------------------------------------------update========================================

//  con.query("update `students_table` SET `id`='3',`name`='Shamama Kanwal',`email`='ShamamaKanwal@gmail.com',`password`='1100008954' WHERE `name`='Shamama'",(err,result)=>{
//   console.log("Result",result)
//  })
// ---------------------------------view===============================
//  con.query("Select * from students_table",(err,result)=>{
//   console.log("Result",result)
//  })
// =======================================delete----------------------------------------
// con.query("Delete  from students_table Where `id`='2'" ,(err,result)=>{
//   console.log("Delete performed",result)
// })

// CRUD operation ends here===========================================///////////////////////////////////



 // END CRUD OPERATION PERFORMED INTO PHPMYADMIN
 
const insert=fsCustomRef.app.post('/insert',async(request, response) => {
 const data={id:'11',name:'Talha',password:'20',email:"tehree@gmial.com"}  
  con.query('insert into students_table set?',data,(error,results)=>{
    // con.query("INSERT INTO `students_table`(`id`, `name`, `email`, `password`) VALUES ('3','Shamama1','Shamama1@gmail.com','121378954')",(error,results)=>{
  if(error){
    response.send(error);

  }
  else{
  response.send(results)

  }
  })
});
const view=fsCustomRef.app.post('/view',async(request, response) => {  
    con.query('select * from students_table',function(error,results){
      if(error){
        response.send('error')
      }
      else{
        response.send(results)
      }
    })
  });
// const update=fsCustomRef.app.post('/update',async(request, response) => {
//   const data={id:'2',name:'Talha',age:'20'}  
//   connection.query('update into students_table set?',data,(error,results)=>{
//   if(error) error;
//   response.send(results)
//   })
// });
// const del=fsCustomRef.app.delete('/del',async(request, response) => {  
//     connection.query('Delete from students_table',function(error,results){
//       if(error){
//         response.send('error')
//       }
//       else{
//         response.send("kjjkk")
//       }
//       console.log("kjhhy");
//     })
//   });
  fsCustomRef.app.listen(2000);
module.exports={
   insert:insert,
  //  view:view,
  //  update:update,
  //  del:del
}