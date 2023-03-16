const fsCustomRef=require('./References/AllUsedReferences')
const StudentController = require("./CRUD/studentController");
const controller = require("./Controller/controller");
const multer= require("multer");
// const dataConnection = require("./config/DataConnection");
const ejsForm = require("./Form/ejsform");
var bodyParser = require("body-parser");
var mysql      = require('mysql');
const { response } = require('express');
fsCustomRef.app.use(bodyParser.json());

fsCustomRef.app.use(bodyParser.urlencoded({ extended: true }));

const MWimg=multer({
    storage:multer.diskStorage({
        destination:function(req,file,cb){
            cb(null,'./public/assets/images/users');
        },
        filename:function(req,file,cb){
            const now=Date.now();
            cb(null,`${file.fieldname}${now}+.jpeg`);
        }
    })
}).single("profile");
// mysql code starts
// var connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : '',
//   database : 'studentdb',
//   port: '3306'
// });

// connection.connect();
 
// connection.query('SELECT * from students_Table', function (error, results) {
//   if (error) throw error;
//   response.send(results);
// });
 
// connection.end();

// mysql code ends here
// const connection = "students";

fsCustomRef.app.get("/", async (req, res) => {
  // let path = "/createData";
  // const allStudentData = "";
  // const btnName = "ADD STUDENT";
  const allStudent = await controller.viewData();
res.send(allStudent)
  // res.render(`form`, {
  //   allStudent: allStudent,
  //   path: path,
  //   allStudentData: allStudentData,
  //   btnName: btnName,
  // });
});

fsCustomRef.app.post("/createData", async (req, res) => {
  // res.send(req.body)
  // let path = "/createData";
  // const allStudentData = "";
  // const btnName = "ADD STUDENT";
  let insertedData = await controller.createData(req.body);
  return insertedData;
  // if ((insertedData = 1)) {
  //   let allStudent = await controller.viewData();

    // res.render(`form`, {
    //   allStudent: allStudent,
    //   path: path,
    //   allStudentData: allStudentData,
    //   btnName: btnName,
    // });
  // } else {
  //   res.send("there is an issue in creating");
  // }
});

fsCustomRef.app.post("/delete", async (req, res) => {
  // res.send(req.body)
  // const path = "/createData"
  // const allStudentData = "";
  // const btnName = "ADD STUDENT";
  let DeletedData = await controller.deleteData(req.body);
 return DeletedData;
  // if ((DeletedData = 1)) {
  
  //   let allStudent = await controller.viewData();
  
  //   // res.render(`form`, {
  //   //   allStudent: allStudent,
  //   //   path: path,
  //   //   allStudentData: allStudentData,
  //   //   btnName: btnName,
  //   // });
  // } else {
  //   res.send("there is an issue in deleTE");
  // }
});

// fsCustomRef.app.get("/editStudent", async (req, res) => {
//   const allStudentData = req.query;
//   const btnName = "UPDATE STUDENT";
//   let allStudent = await controller.viewData();
//   const path = "/editData";
//   // res.render(`form`, {
//   //   allStudentData: allStudentData,
//   //   path: path,
//   //   allStudent: allStudent,
//   //   btnName: btnName,
//   // });
// });

fsCustomRef.app.post("/editData", async (req, res) => {
  // res.send(req.body)
  // const path = "/editData";
  // const allStudentData = req.query;
  // const btnName = "UPDATE STUDENT";
  let insertedData = await controller.updataData(req.body);
  if ((insertedData = 1)) {
    let allStudent = await controller.viewData();
    // res.render(`form`, {
    //   allStudent: allStudent,
    //   path: path,
    //   allStudentData: allStudentData,
    //   btnName: btnName,
    // });
  } else {
    res.send("there is an issue in updating");
  }
});

fsCustomRef.app.get("/ClearAll", async (req, res) => {
  const path = "/createData";
  const allStudentData = "";
  const btnName = "ADD STUDENT";
  const allStudent = await controller.clearAll();
  // res.render(`form`, {
  //   allStudent: allStudent,
  //   path: path,
  //   allStudentData: allStudentData,
  //   btnName: btnName,
  // });
});
///////////////////////////taining
fsCustomRef.app.get("/training", (req, res) => {
  res.render(`TrainingHTML`);
});

/////////////////////////////appp level

fsCustomRef.app.get(
  "/AgeChecker",
  fsCustomRef.CommonMiddleWare.ageCheckerMW,
  (req, res) => {
    res.send(`Welcome`);
  }
);
/////////////////////////////////////////route level
fsCustomRef.authRoute.get("/RL", (req, res) => {
  res.send(`Welcome at Route level`);
});

/////////////////////////////////////////////////////////////////////////////////////////////EJS

fsCustomRef.authRoute.get("/home", (req, res) => {
  // let allUser="Alisha"
  // let allTeacherNmae=[{tname:"Sadaf"},{tname:"Aiman"},{tname:"Iram"}]
  // res.render(`index`,{allUser:allUser,allTeacherNmae:allTeacherNmae})
  res.render(`index`);
});

fsCustomRef.authRoute.get("/aboutUs", (req, res) => {
  res.render(`aboutus`);
});


///////////////////////////////////////////////////////////////CRUD Operstion of form without ejs



// fsCustomRef.app.get("/services", (req, res) => {
//   res.send('<a href="/createData">CREATE RECORD</a><br><br><a href="/readRecord">READ RECORD</a><br><br><a href="deleteDataFromLink">DELETE RECORD</a><br><br><a href="updateDataFromLink">UPDATE RECORD</a>');
// });

// fsCustomRef.app.get("/createData", (req, res) => {
//   res.send(`${form.htmlDataVar}`);
// });

// fsCustomRef.app.post("/UserDATA", (req, res) => {
//   res.send(`  Name is : ${req.body.name}   Age is : ${req.body.age}   City is : ${req.body.city} Password is : ${req.body.password}`);
//   StudentController.createData(req.body);
// });

// fsCustomRef.app.get("/readRecord", (req, res) => {
//   res.write(StudentController.readData());
//   res.send();
//  });



// fsCustomRef.app.get("/updateDataFromLink", (req, res) => {
//   res.send(`${form.updatedata}`);
// });

// fsCustomRef.app.post("/updataData", (req, res) => {
//   StudentController.updataData(req.body);
//   res.send("Record updated");
// });

// fsCustomRef.app.get("/deleteDataFromLink", (req, res) => {
//   res.send(`${form.deleteDataForm}`);
// });

// fsCustomRef.app.post("/deleteData", (req, res) => {
//   StudentController.deleteData(req.body.name);
//   res.send("Record deleted");
// });

/////////////////////////////////////////////////////////////////////////////////////mongo

//  let alldataCreate=await collection.insertOne({name:"name",password:"password",email:"email",age:"age"})
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

/////////////////////////////////////////////////ejs kam

fsCustomRef.app.get("/EjsCRUD", (req, res) => {
  res.send(
    '<a href="/createData">CREATE RECORD</a><br><br><a href="/readRecord">READ RECORD</a><br><br><a href="deleteDataFromLink">DELETE RECORD</a><br><br><a href="updateDataFromLink">UPDATE RECORD</a>'
  );
});

/////////////////////create

fsCustomRef.app.get("/createData", (req, res) => {
  res.send(`${ejsForm.EJShtmlDataVar}`);
});
fsCustomRef.app.post("/portfolio", async (request, response) => {
  const inputData = {
    name: request.body.name,
    age: request.body.age,
    city: request.body.city,
    password: request.body.password,
    email: request.body.email,
  };
  // response.render("formHTML", { inputData });
  StudentController.createData(inputData);

  let alldataCreate = await collection.insertOne(inputData);
  console.log(alldataCreate);
});

//////////////////////////read
fsCustomRef.app.get("/readRecord", async (req, res) => {
  let alldataRead = await collection.find().toArray();
  console.log(alldataRead);
  res.send();

  // res.write(StudentController.readData());
  // res.send();
});

//////////////////////update

fsCustomRef.app.get("/updateDataFromLink", (req, res) => {
  res.send(`${ejsForm.EJSupdatedata}`);
});

fsCustomRef.app.post("/updataData", async (req, res) => {
  const inputData = {
    name: req.body.name,
    age: req.body.age,
    city: req.body.city,
    password: req.body.password,
    email: req.body.email,
  };

  let change = { name: req.body.name };

  res.send("Record updated");
  let alldataUpdate = await collection.updateOne(change, { $set: inputData });
  console.log(alldataUpdate);

  // StudentController.updataData(req.body);
});

///////////////////////////delete

fsCustomRef.app.get("/deleteDataFromLink", (req, res) => {
  res.send(`${ejsForm.EJSdeleteDataForm}`);
});

fsCustomRef.app.post("/deleteData", async (req, res) => {
  let change = { name: req.body.name };
  res.send("Record deleted");
  let alldataDEL = await collection.deleteOne(change);
  console.log(alldataDEL);

  // StudentController.deleteData(req.body.name);
});
/////.............file uploading.....///////
fsCustomRef.app.post("/uploadFile",MWimg,(req,res)=>{
  res.send("File Uploaded");
})
fsCustomRef.app.post("/Tehreem",MWimg,(req,res)=>{
  res.send("File Uploaded");
})
fsCustomRef.app.get("*", (req, res) => {
  res.sendFile(`${fsCustomRef.PathToViewsFiles}/errors/404errors.html`);
});

fsCustomRef.app.listen(4900);
