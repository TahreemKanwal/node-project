const multer= require("multer");
const MWimg=multer({
    storage:multer.diskStorage({
        destination:function(req,file,cb){
            cb(null,'./public/assets/images/users');
        },
        filename:function(req,file,cb){
            const now=Date.now();
            cb(null,`${file.fieldname}${now}+.jpg`);
        }
    })
}).single("profile");
module.exports={
    MWimg
}

// here is comment for github