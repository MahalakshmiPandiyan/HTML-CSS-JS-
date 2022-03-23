
class FormValidation
{
  constructor(firstName,lastName,emailId,phoneNo,domainName,setDate){
    this.firstName=firstName;
    this.lastName=lastName;
    this.emailId=emailId;
    this.phoneNo=phoneNo;
    this.domainName=domainName;
    this.setDate=setDate;
  }
  firstNameValidate()
  {
    if(firstName.value.trim()===""){
      // validation.onError(firstName,"First name cannot be empty");
      document.getElementById("id1").innerHTML="First name cannot be empty";
      console.log("first name");

    }
    else if (!validation.nameValidation(firstName.value.trim())){
      validation.onError(firstName,"First name should contain only letters");
    }
    else {
      validation.onSuccess(firstName);
    }
  }
  lastNameValidate()
  {
    if(lastName.value.trim()===""){
      validation.onError(lastName,"Last name cannot be empty");
    }
    else if (!validation.nameValidation(lastName.value.trim())){
      validation.onError(lastName,"Last name should contain only letters");
    }
    else {
      validation.onSuccess(lastName);
    }
  }

  emailIdValidate()
  {
    if(emailId.value.trim()===""){
      validation.onError(emailId,"Email Id cannot be empty");
    }
    else if (!validation.emailIdValidation(emailId.value.trim())){
      validation.onError(emailId,"Invalid Email Id");
    }
    else {
      validation.onSuccess(emailId);
    }
  }

  phoneNumberValidate()
  {
    if(phoneNo.value.trim()===""){
      validation.onError(phoneNo,"Phone Number cannot be empty");
    }
    else if (!validation.phoneNumberValidation(phoneNo.value.trim())){
      validation.onError(phoneNo,"Phone Number should start with [6-9] followed by 9 digits");
    }
    else {
      validation.onSuccess(phoneNo);
    }
  }


  domainValidate()
  {
    if(!validation.domainNameValidation(domainName.value.trim()))
    {
      validation.onError(domainName,"domain name not selected");
    }
    else {
      validation.onSuccess(domainName);
    }
  }
  dateValidate()
  {
    if(!validation.dateValidation(setDate.value.trim()))
    {
      validation.onError(setDate,"date name not selected");

    }
    else {
      validation.onSuccess(setDate);
    }
  }

}


let form= document.getElementById("form");
let firstName=document.getElementById("firstname");
let lastName=document.getElementById("lastname");
let companyName=document.getElementById("company");
let emailId=document.getElementById("email");
let phoneNo=document.getElementById("phoneNumber");
let domainName=document.getElementById("domain");
let setDate=document.getElementById("date");


let output=new FormValidation(firstName,lastName,emailId,phoneNo,domainName,setDate);

firstName.addEventListener('blur',output.firstNameValidate);
lastName.addEventListener('blur',output.lastNameValidate);
emailId.addEventListener('blur',output.emailIdValidate)
phoneNo.addEventListener('blur',output.phoneNumberValidate);
domainName.addEventListener('blur',output.domainValidate);
setDate.addEventListener('blur',output.dateValidate);


class Validation extends FormValidation
{
   onSuccess(input){
    let parent=input.parentElement;
    let messageEle=parent.querySelector("small");
    messageEle.style.visibility="hidden";
    input.style.border="3px solid green";
}

 onError(input,message){
  let parent=input.parentElement;
    let messageEle=parent.querySelector("small");

    // input.style.border="3px solid red";
    input.classList.add('error');

}

nameValidation(name){
var firstNameRegx= /^[a-zA-Z]{3,15}$/;
if (name.match(firstNameRegx)){
  return true;
}
else{
  return false;
}
}

 emailIdValidation(emailId){
  var emailIdRegx=/^[a-z0-9]+@[a-z]+\.[a-z\.]{2,6}$/
  if(emailId.match(emailIdRegx)){
    return true;
  }
  else{
    return false;
  }

}
 phoneNumberValidation(phoneNo){
var phoneNumberRegx=/^[6-9]{1}[0-9]{9}$/;
if(phoneNo.match(phoneNumberRegx)){
return true;
}
else{
return false;
}
}
 
domainNameValidation(domainName){
  if(domainName===""){
    return false;
  }
  else{
    return true;
    }
}
dateValidation(date)
{
  if(date==="")
  {
    return false;
  }
  else{
    return true;
  }
}

}

let validation= new Validation();