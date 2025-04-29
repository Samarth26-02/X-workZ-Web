function submitForm() {
    let val = true;
  
    let nameInput = document.formName.nameName.value;
    let numberInput = document.formName.numberName.value;
    let ageInput = document.formName.age.value;
  
    if (nameInput.length < 3 || nameInput.length >= 20) {
      val = false;
      checkError("nameInput","The length of name should be greater than 3 and less than 20");
    }
  
    if (numberInput.length != 10) {
      val = false;
      checkError("numberInput", "The length of number should be 10 digit");
    }

    if (ageInput <= 18) {
      val = false;
      checkError("ageInput", "Age should be above 18");
    }
  
    return val;
  }
  var id, descr;
  function checkError(id, descr) {
    if (id === "nameInput") {
      document.getElementById("namespan").innerHTML = descr;
    }
  
    if (id === "numberInput") {
      document.getElementById("numberspan").innerHTML = descr;
    }
  
    if (id === "ageInput") {
      document.getElementById("agespan").innerHTML = descr;
    }
  }