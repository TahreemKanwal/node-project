const customRefrences=require('../References/AllUsedReferences')

const createData=(data)=>{
     customRefrences.fs.appendFile(`${customRefrences.PathToDatabaseFiles}/Students.txt`,`\n${data.name}\t\t\t\t${data.age}\t\t\t\t${data.city}\t\t\t\t${data.password}`,(err)=>{
if(err)
{
console.log(err);
}
else{
 console.log("data inserted successfully");
}
     })

}

const readData=()=>{
    let allStudent=customRefrences.fs.readFileSync(`${customRefrences.PathToDatabaseFiles}/Students.txt`,'utf-8',);
    return allStudent;
  }

  const updataData=(data)=>{
     let allStudent=readData();
     let allStudentArray=allStudent.split("\n")
      allStudentArray.map((item,index)=>{
         if(index>0)
         {
             let cols=item.split("\t\t\t\t")
             if(cols[0]==data.name)
             {
                
                 allStudentArray.splice(index,1,`${data.name}\t\t\t\t${data.age}\t\t\t\t${data.city}\t\t\t\t${data.password}`);
                 customRefrences.fs.writeFileSync(`${customRefrences.PathToDatabaseFiles}/Students.txt`,allStudentArray.join("\n"))
 
             }
             else
             {
                 console.log("not matched")
             }
             
         }
        //  customRefrences.fs.writeFileSync(`${customRefrences.PathToDatabaseFiles}/Students.txt`,allStudentArray.join("\n"))
         
     console.log(allStudentArray)
     })
     
 }


 const deleteData=(data)=>{
    let allStudent=readData();
    let allStudentArray=allStudent.split("\n")
     allStudentArray.map((item,index)=>{
        if(index>0)
        {
            let cols=item.split("\t\t\t\t")
            if(cols[0]==data)
            {
               console.log("matched")
                allStudentArray.splice(index,1);
                 customRefrences.fs.writeFileSync(`${customRefrences.PathToDatabaseFiles}/Students.txt`,allStudentArray.join("\n"))

            }
            else
            {
                console.log("not matched")
            }
             //customRefrences.fs.writeFileSync(`${customRefrences.PathToDatabaseFiles}/Students.txt`,allStudentArray.join("\n"))
        }
        
    console.log(allStudentArray)
    })
}
module.exports={
    "createData":createData,
    "readData":readData,
    "updataData":updataData,
    "deleteData":deleteData
}