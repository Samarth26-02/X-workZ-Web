let student1={id:1,studentName:'Max',classRoom:'10A'}//this is the first type of writing the objects and calling them, 'key:value'

let student2=new Object();//this is the second type of writing the object same as in java language
student2.id=2;
student2.studentName='Oscar';
student2.classRoom='10A';

function student3(id,studentName,classRoom){//this writing object same as constructor in java
    this.id=id;
    this.studentName=studentName;
    this.classRoom=classRoom;
}

function newFunction(){
    console.log(student1);//this is to print the objects on console

    console.log(student2);

    console.log(student3);


    //to get the element in html tags refer below
    let pValue=document.getElementsByTagName('p')[0].innerHTML;//get elements by tag names
    console.log(pValue);

    let pClassValue=document.getElementsByClassName('namasteClass')[3].innerHTML;
    console.log(pClassValue);

    let pIDValue=document.getElementById('hiPara').innerHTML;//id will be unique in the whole document,so there is no need to put the index while using get element by id
    console.log(pIDValue);
}