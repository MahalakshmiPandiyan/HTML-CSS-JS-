let form= document.getElementById("form");
let firstName=document.getElementById("firstname");
let lastName=document.getElementById("lastname");
let companyName=document.getElementById("company");
let emailId=document.getElementById("email");
let phoneNo=document.getElementById("phoneNumber");
let genderName=document.getElementById("gender");
let domainName=document.getElementById("domain");


firstName.addEventListener('blur',firstNameValidate);
lastName.addEventListener('blur',lastNameValidate);
emailId.addEventListener('blur',emailIdValidate)
phoneNo.addEventListener('blur',phoneNumberValidate);
genderName.addEventListener('blur',genderNameValidate);
domainName.addEventListener('blur',domainNameValidate);

function firstNameValidate()
{
  if(firstName.value.trim()===""){
  	onError(firstName,"First name cannot be empty");
    return false;
  }
  else if (!firstNameValidatee(firstName.value.trim())){
     onError(firstName,"First name should contain only letters");
     return false;
  }
  else {
  	onSuccess(firstName); 
    return true;
  }
}


function lastNameValidate()
{
  if(lastName.value.trim()===""){
  	onError(lastName,"Last name cannot be empty");
    return false;
  }
  else if (!lastNameValidatee(lastName.value.trim())){
     onError(lastName,"Last name should contain only letters");
     return false;
  }
  else {
  	onSuccess(lastName);
    return true;
  }
}

function emailIdValidate()
{
  if(emailId.value.trim()===""){
  	onError(emailId,"Email Id cannot be empty");
    return false;
  }
  else if (!emailIdValidatee(emailId.value.trim())){
     onError(emailId,"Invalid Email Id");
     return false;
  }
  else {
  	onSuccess(emailId);
    return true;
  }
}

function phoneNumberValidate()
{
  if(phoneNo.value.trim()===""){
  	onError(phoneNo,"Phone Number cannot be empty");
    return false;
  }
  else if (!phoneNumberValidatee(phoneNo.value.trim())){
     onError(phoneNo,"Phone Number should start with [6-9] followed by 9 digits");
     return false;
  }
  else {
  	onSuccess(phoneNo);
    return true;
  }
}

function genderNameValidate()
{
    if(genderName.value.trim()===""){
    onError(genderName,"gender cannot be empty");
    return false;
  }
  else if (!genderNameValidatee(genderName.value.trim())){
     onError(genderName,"gender should male or female");
     return false;
  }
  else {
    onSuccess(genderName);
    return true;
  }
}

function domainNameValidate()
{
  if(domainName.value.trim()===""){
  	onError(domainName,"Domain Name cannot be empty");
    return false;
  }
  else if (!domainNameValidatee(domainName.value.trim())){
     onError(domainName,"Domain Name should be BFS or EBA");
     return false;
  }
  else {
  	onSuccess(domainName);
    return true;
  }
}

function onSuccess(input){
	  let parent=input.parentElement;
    let messageEle=parent.querySelector("small");
    messageEle.style.visibility="hidden";
    input.style.border="3px solid green"; 
}

function onError(input,message){
	let parent=input.parentElement;
    let messageEle=parent.querySelector("small");
    messageEle.style.visibility="visible";
    messageEle.innerText=message;
    input.style.border="3px solid red"; 

}

function firstNameValidatee(firstName){
	var firstNameRegx= /^[a-zA-Z]{3,10}$/;
	if (firstName.match(firstNameRegx)){
		return true;
	}
	else{
		return false;
	}
}
function lastNameValidatee(lastName){
	var lastNameRegx= /^[a-zA-Z]{1,10}$/;
	if(lastName.match(lastNameRegx)){
		return true;
	}
	else{
		return false;
	}
}
function emailIdValidatee(emailId){
  var emailIdRegx=/^[a-z0-9]+@[a-z]+\.[a-z\.]{2,6}$/
  if(emailId.match(emailIdRegx)){
    return true;
  }
  else{
    return false;
  }

}
function phoneNumberValidatee(phoneNo){
	var phoneNumberRegx=/^[6-9]{1}[0-9]{9}$/;
	if(phoneNo.match(phoneNumberRegx)){
		return true;
	}
	else{
		return false;
	}
}

function genderNameValidatee(genderName)
{
  if (genderName.toLowerCase()==="male" || genderName.toLowerCase()==="female") {
    return true;
  }
  else{
    return false;
  }
}
function domainNameValidatee(domainName){
	if(domainName.toLowerCase()==="bfs"|| domainName.toLowerCase()==="eba" ){
		return true;
	}
	else{
		return false;
	}
}
