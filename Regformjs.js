
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
  var idphn = document.getElementById("id4");
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


function domainValidate() {
  var idDomain = document.getElementById("id5");

  if (!domainNameValidation(domainName.value.trim())) {
    onError(domainName, "Domain name not selected", idDomain);
  }
  else {
    onSuccess(domainName, idDomain);
    return true;

  }
}
function dateValidate() {
  var idDate = document.getElementById("id6");

  if (setDate.value.trim() === "") {
    onError(setDate, "Date name not selected", idDate);
  }
  else if (dateValidation(setDate.value.trim())) {
    onError(setDate, "Select Today's Date", idDate);
  }
  else {
    onSuccess(setDate, idDate);
    return true;

  }
}

function aadharValidate() {
  var idAadhar = document.getElementById("id7");
  if (aadharValue.value.trim() === "") {
    onError(aadharValue, "Aadhar number cannot be empty", idAadhar);
  }
  else if (aadharValidation(aadharValue.value.trim())) {
    onError(aadharValue, "Invalid Aadhar number", idAadhar);
  }
  else {
    onSuccess(aadharValue, idAadhar);
    return true;

  }

}
function panValidate() {

  var idPan = document.getElementById("id8");
  if (panValue.value.trim() === "") {
    onError(panValue, "Aadhar number cannot be empty", idPan);
  }
  else if (panValidation(panValue.value.trim())) {
    onError(panValue, "Invalid Aadhar number", idPan);
  }
  else {
    onSuccess(panValue, idPan);
    return true;
  }

}



let firstName = document.getElementById("firstname");
let lastName = document.getElementById("lastname");
let companyName = document.getElementById("company");
let emailId = document.getElementById("email");
let phoneNo = document.getElementById("phoneNumber");
let domainName = document.getElementById("domain");
let setDate = document.getElementById("date");
let aadharValue = document.getElementById("aadhar");
let panValue = document.getElementById("pan");

firstName.addEventListener('blur', firstNameValidate);
lastName.addEventListener('blur', lastNameValidate);
emailId.addEventListener('blur', emailIdValidate)
phoneNo.addEventListener('blur', phoneNumberValidate);
domainName.addEventListener('blur', domainValidate);
setDate.addEventListener('blur', dateValidate);
aadharValue.addEventListener('blur', aadharValidate);
panValue.addEventListener('blur', panValidate);


function onSuccess(input, id) {
  id.innerHTML = "";
  input.classList.add('success')
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
function phoneNumberValidation(phoneNo) {
  var phoneNumberRegx = /^[6-9]{1}[0-9]{9}$/;
  if (phoneNo.match(phoneNumberRegx)) {
    return true;
  }
  else {
    return false;
  }
}

function domainNameValidation(domainName) {
  if (domainName === "") {
    return false;
  }
  else {
    return true;
  }
}
function dateValidation(setDate) {
  const otherDate = new Date(setDate);
  const todayDate = new Date();
  if (otherDate.getDate() === todayDate.getDate() &&
    otherDate.getMonth() === todayDate.getMonth() &&
    otherDate.getYear() === todayDate.getYear()) {
    return false;
  }
  else {
    return true;
  }
}
function aadharValidation(aadharValue) {
  var aadharRgex = /^[2-9]{1}[0-9]{3}\s{1}[0-9]{4}\s{1}[0-9]{4}$/;
  if (aadharValue.match(aadharRgex)) {
    return false;
  }
  else {
    return true;
  }
}
function panValidation(panValue) {
  var panRegex = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/
  if (panValue.match(panRegex)) {
    return false;
  }
  else {
    return true;
  }
}




function validateForm() {

  if (firstName.value.trim() === "") {
    document.getElementById("id1").innerHTML = "This field is neccesary";
    if (lastName.value.trim() === "") {
      document.getElementById("id2").innerHTML = "This field is neccesary";
      if (emailId.value.trim() === "") {
        document.getElementById("id3").innerHTML = "This field is neccesary";
        if (phoneNo.value.trim() === "") {
          document.getElementById("id4").innerHTML = "This field is neccesary";
          if (domainName.value.trim() === "") {
            document.getElementById("id5").innerHTML = "This field is neccesary";
            if (setDate.value.trim() === "") {
              document.getElementById("id6").innerHTML = "This field is neccesary";
              if (aadharValue.value.trim() === "") {
                document.getElementById("id7").innerHTML = "This field is neccesary";
                if (panValue.value.trim() === "") {
                  document.getElementById("id8").innerHTML = "This field is neccesary";

                }
              }
            }
          }
        }
      }
    }
  }  
  else
  {
    if(firstNameValidate()==true && lastNameValidate()==true && emailIdValidate()==true && phoneNumberValidate()==true 
    && domainValidate()==true && dateValidate()== true && (aadharValidate()==true || panValidate()==true)){
      return true;
    }
  }
  return false;

  
}


function yesnoCheck(arg) {
  if (arg.value == "aadhar") {
    document.getElementById("adc").style.display = "block";
  }
  else {
    document.getElementById("adc").style.display = "none";
  }
  if (arg.value == "pan") {
    document.getElementById("pc").style.display = "block";
  }
  else {
    document.getElementById("pc").style.display = "none";
  }
}