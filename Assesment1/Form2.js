
function onClick() {
    alert("Sumitted")
}
function submitForm() {
    let val = true;

    let nameId = document.formName.nameName.value;
    let numberId = document.formName.numberNumber.value;
    let ageId = document.formName.ageAge.value;

    if (20 >= nameId.length >= 3) {
        val = true;
    }


    if (numberId.length != 10) {
        val = false;
    }
    // else {
    //     val = false;
    // }
    if (age <= 18) {
        val = false;
    }
    // let emailId = document.formName.emailEmail.value;
    // let genderId = document.formName.gender.value;
    // let passwardId = document.formName.passwardPassward.value;
    // let correctId = document.formName.correctCorrect.value;
    let message = "Form Submitted Successfully!\n" +
        "Name: " + nameId + "\n" +
        "Number: " + numberId + "\n" +
        "Email: " + emailId + "\n" + "Gender: " + genderId +
        "\n" + "Passward: " + passwardId + "\n " + "Conform Passward: " + correctId + " ";

    alert(message);
    return val;
}
// function clearForm() {

// }
