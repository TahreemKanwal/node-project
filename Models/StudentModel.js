
const customRefrences=require('../References/AllUsedReferences');
const StudentSchema=require('../Schemas/StudentSchema');
let StudentModel=new customRefrences.mongoose.model('records', StudentSchema.StudentSchema);

module.exports={
    StudentModel:StudentModel
}