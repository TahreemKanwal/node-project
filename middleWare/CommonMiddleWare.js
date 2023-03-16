const ageCheckerMW=(req,resp,next)=>{
    if(!req.query.age)
    {
     resp.send("Enter first age");
    }
    else if(req.query.age>=45)
    {
     next();
    }
    else{
     resp.send("You arer under age")
    }

}


const authCheckerMW=(req,resp,next)=>{
    if(!req.query.logged)
    {
     resp.render("profile");
    }
   
    else{
        next();
    }

}




module.exports={
    ageCheckerMW:ageCheckerMW,
    authCheckerMW:authCheckerMW
}
