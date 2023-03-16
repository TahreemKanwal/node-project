const EJShtmlDataVar=`<form action='/portfolio'  method="POST">

<Label>Full Name:</Label>
<input type="text" placeholder="Enter FullName" name="name"/><br><br>
<Label>Age:&emsp;&emsp;&ensp;</Label>
<input type="number" placeholder="Enter Age" name="age"/><br><br>
<Label>City:&emsp;&emsp;&ensp;</Label>
<input type="text" placeholder="Enter City" name="city"/><br><br>
<Label>Password:&ensp;</Label>
<input type="password" placeholder="Enter Password" name="password"/><br><br>
<Label>Email:&emsp;&emsp;</Label>
<input type="email" placeholder="Enter Email" name="email"/><br><br>
<input type="submit"  name=submit value="CLICK ME"/><br><br>

</form>`

const EJSdeleteDataForm=`<form action='/deleteData'  method="POST">
<Label>Full Name:</Label>
<input type="text" placeholder="Enter FullName" name="name"/><br><br>
<input type="submit"  name=submit value="CLICK ME"/><br><br>
</form>`

const EJSupdatedata=`<form action='/updataData'  method="POST">

<Label>Full Name:</Label>
<input type="text" placeholder="Enter FullName" name="name"/><br><br>
<Label>Age:&emsp;&emsp;&ensp;</Label>
<input type="number" placeholder="Enter Age" name="age"/><br><br>
<Label>City:&emsp;&emsp;&ensp;</Label>
<input type="text" placeholder="Enter City" name="city"/><br><br>
<Label>Password:&ensp;</Label>
<input type="password" placeholder="Enter Password" name="password"/><br><br>

<Label>Email:&emsp;&emsp;</Label>
<input type="email" placeholder="Enter Email" name="email"/><br><br>
<input type="submit"  name=submit value="CLICK ME"/><br><br>
</form>`



const EJSupdatedata2=`<form action='/updataData'  method="POST">

<Label>Full Name:</Label>
<input type="text" placeholder="Enter FullName" name="name"/><br><br>

<input type="submit"  name=submit value="CLICK ME"/><br><br>
</form>`



module.exports={
    EJShtmlDataVar:EJShtmlDataVar,
    EJSdeleteDataForm:EJSdeleteDataForm,
    EJSupdatedata:EJSupdatedata,
    EJSupdatedata2:EJSupdatedata2
};

{/* <Label>Enter Id:&ensp;&ensp;</Label>
<input type="number" placeholder="Enter id" name="id"/><br><br> */}