function onClick() {
    alert("form is Submitted")
}
function submitForm() {
    let valu = true;
    let nameInput = document.formName.nameName.value;
    let numInput = document.formName.numberNumber.value;
    let gendInput = document.formName.Gender.value;
    let ageInput = document.formName.ageAge.value;
    let emailinput = document.formName.emailEmail.value;

    // alert(nameInput)
    // alert(numInput)
    // alert(gendInput)
    // alert(ageInput)
    // alert(emailinput)


    if (
        (numInput.length > 10 && numInput.length < 30) &&
        (nameInput.length > 3 && nameInput.length < 30) &&
        (ageInput > 18 && ageInput < 70)
    ) {
        valu = true;
        alert("matching conditions")
    } else {
        alert("not marching conditions")
        valu = false;
    }
    return valu

}