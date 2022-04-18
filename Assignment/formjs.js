const steps = Array.from(document.querySelectorAll('form .step'));
const nextBtn = document.querySelectorAll('form .next-btn');
const prevBtn = document.querySelectorAll('form .previous-btn');

nextBtn.forEach(button => {
    button.addEventListener('click', () => {
        changeStep('next');
    })
})
prevBtn.forEach(button => {
    button.addEventListener('click', () => {
        changeStep('prev');
    })
})


function changeStep(btn) {
    let index = 0;
    const active = document.querySelector('.active');
    index = steps.indexOf(active);
    steps[index].classList.remove('active')
    if (btn == 'next') {
        if (index == 0) {
            if (firstNameValidate() == true && lastNameValidate() == true && passwordValidate() == true && confirmPasswordValidate() == true && emailIdValidate() == true) {
                index++;
            }
            else {
                index = 0;
            }

        }
        else if (index == 1) {
            if (dateValidate() === true && genderValidate() == true && stateValidate() == true && phoneNumberValidate() == true) {
                index++;
            }
            else {
                index = 1;
            }
        }
        else if (index == 2) {
            index++;
        }
        else if (index == 3) {
            if (graduateValidate() == true && yearOfPassValidate() == true) {
                index++;

            }
            else {
                index = 3;
            }
        }
        else if (index == 4) {
            index++;
        }

    }
    else if (btn = 'prev') {
        index--;
    }
    steps[index].classList.add('active')

}

function firstNameValidate() {
    var idfirst = document.getElementById("id1");
    if (firstName.value.trim() === "") {
        onError(firstName, "First name cannot be empty", idfirst);
    }
    else if (!nameValidation(firstName.value.trim())) {
        onError(firstName, "First name should contain only letters", idfirst);
    }
    else {
        onSuccess(firstName, idfirst);
        return true;

    }
}
function lastNameValidate() {
    var idlast = document.getElementById("id2");
    if (lastName.value.trim() === "") {
        onError(lastName, "Last name cannot be empty", idlast);
    }
    else if (!nameValidation(lastName.value.trim())) {
        onError(lastName, "Last name should contain only letters", idlast);
    }
    else {
        onSuccess(lastName, idlast);
        return true;

    }
}

function emailIdValidate() {
    var idemail = document.getElementById("id3");

    if (emailId.value.trim() === "") {
        onError(emailId, "Email Id cannot be empty", idemail);
    }
    else if (!emailIdValidation(emailId.value.trim())) {
        onError(emailId, "Invalid Email Id", idemail);
    }
    else {
        onSuccess(emailId, idemail);
        return true;

    }
}

function phoneNumberValidate() {
    var idphn = document.getElementById("id10");
    if (phoneNo.value.trim() === "") {
        onError(phoneNo, "Phone Number cannot be empty", idphn);
    }
    else if (!phoneNumberValidation(phoneNo.value.trim())) {
        onError(phoneNo, "Phone Number should start with [6-9] followed by 9 digits", idphn);
    }
    else {
        onSuccess(phoneNo, idphn);
        return true;

    }
}


function dateValidate() {
    var idDate = document.getElementById("id6");

    if (setDate.value.trim() === "") {
        onError(setDate, "Date name not selected", idDate);
    }
    else if(!dateFormatValidation(setDate.value.trim()))
    {
        onError(setDate, "Format should be dd/mm/yyyy", idDate);
        
    }
    else if (!dateValidation(setDate.value.trim())) {
        onError(setDate, "Invalid date", idDate);
    }
    else {
        onSuccess(setDate, idDate);
        return true;

    }
}


function stateValidate() {
    var idState = document.getElementById("id9");
    if (!stateValidation(state.value.trim())) {
        onError(state, "State not selected", idState);
    }
    else {
        onSuccess(state, idState);
        return true;
    }
}

function departmentValidate() {
    var idDep = document.getElementById("depSmall")
    if (!departmentValidation(department.value.trim())) {
        onError(department, "Department not selected", idDep);
    }
    else {
        onSuccess(department, idDep);
        return true;
    }
}

function checkValidate() {
    var idCheck = document.getElementById("checkSmall");
    if (check.checked===false) {
        onError(check, "check not selected", idCheck);
    }
    else {
        onSuccess(check, idCheck);
        return true;
    }
}

function passwordValidate() {
    var idPass = document.getElementById("id5");
    if (password.value.trim() === "") {
        onError(password, "password cannot be empty", idPass);
    }
    else if (!passwordValidation(password.value.trim())) {
        onError(password, "password should have atleast one uppercase,one lowercase,one special character,one number", idPass);
    }
    else {
        onSuccess(password, idPass);
        return true;

    }
}
function confirmPasswordValidate() {
    var idConformPass = document.getElementById("id4");
    if (confirmPassword.value.trim() === "") {
        onError(confirmPassword, "Confirm Password cannot be empty", idConformPass);
    }
    else if (password.value.trim() !== confirmPassword.value.trim()) {
        onError(confirmPassword, "passwords does not match", idConformPass);
    }
    else {
        onSuccess(confirmPassword, idConformPass);
        return true;

    }
}

function genderValidate() {
    var idGender = document.getElementById("id7");
    if (genderMale.checked === false && genderFemale.checked === false) {
        onError(genderFemale, "Gender cannot be empty", idGender);
    }
    else {
        onSuccess(genderFemale, idGender);
        return true;

    }
}

function graduateValidate() {
    var idGrad = document.getElementById("graduateSmall")
    if (!graduateValidation(graduate.value.trim())) {
        onError(graduate, "graduation not selected", idGrad);
    }
    else {
        onSuccess(graduate, idGrad);
        return true;
    }
}

function yearOfPassValidate() {
    var idYear = document.getElementById("yearSmall");
    if (yearOfPass.value.trim() === "") {
        onError(yearOfPass, "Year of passing cannot be empty", idYear);
    }
    else if (!yearOfPassValidation(yearOfPass.value.trim())) {
        onError(yearOfPass, "Enter the valid year", idYear);
    }
    else {
        onSuccess(yearOfPass, idYear);
        return true;

    }
}


let firstName = document.getElementById("firstname");
let lastName = document.getElementById("lastname");
let emailId = document.getElementById("email");
let setDate = document.getElementById("date");
let state = document.getElementById("state");
let phoneNo = document.getElementById("phoneNumber");
let department = document.getElementById("dep");
let check = document.getElementById("check");
let password = document.getElementById("password")
let confirmPassword = document.getElementById("confirmPassword");
let genderMale = document.getElementById("male");
let genderFemale = document.getElementById("female");
let graduate = document.getElementById("graduation");
let yearOfPass = document.getElementById("year");


firstName.addEventListener('blur', firstNameValidate);
lastName.addEventListener('blur', lastNameValidate);
emailId.addEventListener('blur', emailIdValidate)
setDate.addEventListener('blur', dateValidate);
state.addEventListener('blur', stateValidate);
phoneNo.addEventListener('blur', phoneNumberValidate);
department.addEventListener('blur', departmentValidate);
check.addEventListener('blur', checkValidate);
password.addEventListener('blur', passwordValidate);
confirmPassword.addEventListener('blur', confirmPasswordValidate)
genderMale.addEventListener('blur', genderValidate);
genderFemale.addEventListener('blur', genderValidate);
graduate.addEventListener('blur', graduateValidate);
yearOfPass.addEventListener('blur', yearOfPassValidate);

function onSuccess(input, id) {
    id.innerHTML = "";
}

function onError(input, message, id) {
    id.innerHTML = message;
    input.classList.add('error');
}

function nameValidation(name) {
    var firstNameRegx = /^[a-zA-Z]{3,15}$/;
    if (name.match(firstNameRegx)) {
        return true;
    }
    else {
        return false;
    }
}

function emailIdValidation(emailId) {
    var emailIdRegx = /^[a-z0-9]{5,13}@[a-z]+\.[a-z\.]{2,6}$/;
    if (emailId.match(emailIdRegx)) {
        return true;
    }
    else {
        return false;
    }

}

function dateValidation(setDate) {
    var age = Math.floor((new Date().getFullYear() - new Date(setDate).getFullYear()));
    console.log(age);
    var month= new Date(setDate).getMonth()
    var date=new Date(setDate).getDate()
    console.log(date);
    console.log(month);
    
    if (age < 21) {
        return false;
    }
    else if(isNaN(month))
    {
        return false;
    }
    else if(isNaN(date))
    {
        return false;
    }
    else {
        return true;
    }
}

function phoneNumberValidation(phoneNo) {
    var phoneNumberRegx = /^[6-9]{1}[0-9]{9}$/;
    if (phoneNo.match(phoneNumberRegx)) {
        return true;
    }
    else {
        return false;
    }
}

function stateValidation(state) {
    if (state === "") {
        return false;
    }
    else {
        return true;
    }
}

function departmentValidation(department) {
    if (department === "") {
        return false;
    }
    else {
        return true;
    }
}

function graduateValidation(graduate) {
    if (graduate === "") {
        return false;
    }
    else {
        return true;
    }
}

function checkValidation(check) {
    if (check.checked === false) {
        return false;
    }
    else {
        return true;
    }
}

function passwordValidation(password) {
    var passwordRegx = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[a-zA-z0-9!@#$%^&*]{6,15}$/;
    if (password.match(passwordRegx)) {
        return true;
    }
    else {
        return false;
    }
}

function yearOfPassValidation(yearOfPass) {
    var year1 =parseInt(yearOfPass)
    if(year1<1950 || year1>2022)
    {
        return false;
    }
    else {
        return true;
    }
}

function dateFormatValidation(setDate)
{
    var pattern = /(\d{2})\/(\d{2})\/(\d{4})/;
    if(setDate.match(pattern))
    {
        return true;
    }
    else{
        return false;
    }

}

function validateForm() {
    if (department.value.trim() === "") {
        document.getElementById("depSmall").innerHTML = "This field is neccesary";
        if (check.checked == false) {
            document.getElementById("checkSmall").innerHTML = "This field is neccesary";
        }
    }
    else {
        if (departmentValidate() == true && check.checked == true) {
            return true;
        }
    }
    return false;
}