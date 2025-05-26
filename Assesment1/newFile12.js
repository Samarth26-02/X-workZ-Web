let emp1={id:10,employeeName:'eee',salary:100000}




let emp2=new Object();
emp2.id=11;
emp2.employeeName='ccc';
emp2.salary=200000;




function emp3(id,employeeName,salary){
    this.id=id;
    this.employeeName=employeeName;
    this.salary=salary;
}

function functionClick(){
console.log(emp1);
console.log(emp2);
console.log(emp3);

let pValue=document.getElementsByTagName('p')[0].innerHTML;
console.log(pValue);

let pidValue=document.getElementById('helloId').innerHTML;
console.log(pidValue);

let pClassValue=document.getElementsByClassName('pClass')[0].innerHTML;
console.log(pClassValue);

}
