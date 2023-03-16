const fs=require("fs");
const path=require("path");
const express = require("express");
const CommonMiddleWare=require("../middleWare/CommonMiddleWare")
const RootPath=require('../RootPath')
const PathToDatabaseFiles = path.join(RootPath,"DatabaseFiles");
const PathToCRUDFiles = path.join(RootPath,"CRUD");
const PathToViewsFiles = path.join(RootPath,"views");
const app = express();
const PathToModelFiles=path.join(RootPath,"Models");
const PathToSchemaFiles=path.join(RootPath,"Schema");
//.............mongoose...............//
const mongoose = require ('mongoose');



mongoose.set('strictQuery', false);
const url = "mongodb://localhost:27017/nodeClass";
const mongoosePackage=mongoose.connect(url);


const authRoute=express.Router();
// authRoute.route('/')
 authRoute.use(CommonMiddleWare.authCheckerMW);

// app.use(CommonMiddleWare.ageCheckerMW)
app.set('view engine','ejs')
app.use('/a',authRoute)

module.exports={
    fs:fs,
    path:path,
    RootPath:RootPath,
    PathToDatabaseFiles:PathToDatabaseFiles,
    PathToCRUDFiles:PathToCRUDFiles,
    PathToViewsFiles:PathToViewsFiles,
    express:express,
    app:app,
    CommonMiddleWare:CommonMiddleWare,
    authRoute:authRoute,
    mongoose:mongoose,
    mongoosePackage:mongoosePackage,
    PathToModelFiles:PathToModelFiles,
    PathToSchemaFiles:PathToSchemaFiles

}