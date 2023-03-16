const customRefrences=require('../References/AllUsedReferences');
const StudentSchema=new customRefrences.mongoose.Schema({
    "name":String,
    "age":Number,
    "email":String,
    "city":String
});
module.exports={
    StudentSchema:StudentSchema
}