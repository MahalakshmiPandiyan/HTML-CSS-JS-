const steps=Array.from(document.querySelectorAll('form .step'));
const nextBtn=document.querySelectorAll('form .next-btn');
const prevBtn=document.querySelectorAll('form .previous-btn');

nextBtn.forEach(button =>{
    button.addEventListener('click',()=>{
        changeStep('next');
    })
})
prevBtn.forEach(button =>{
    button.addEventListener('click',()=>{
        changeStep('prev');
    })
})


function changeStep(btn){
    let index=0;
    const active=document.querySelector('form .step.active');
    index=steps.indexOf(active);
    steps[index].classList.remove('active')
    if(btn=='next')
    {
        if(index==0)
        {
            if(firstNameValidate()==true && lastNameValidate()==true && emailIdValidate()==true)
            {
                index ++;
            }
            else{
                index=0;
            }
            
        }
        else if(index==1)
        {
            if(dateValidate()===true && stateValidate()==true && phoneNumberValidate()==true )
            {
                index++;
            }
            else{
                index=1;
            }
        }
        else if(index==2)
        {
          index++;
        }
        else if(index==3)
        {
          index++;
        }
        else if(index==4)
        {
          index++;
        }

    }
    else if(btn='prev')
    {
        index --;
    }
    steps[index].classList.add('active')
    console.log(index);
    console.log(active);

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
    else if (dateValidation(setDate.value.trim())) {
      onError(setDate, "Select Today's Date", idDate);
    }
    else {
      onSuccess(setDate, idDate);
      return true;
  
    }
  }


  function stateValidate()
  {
    var idState=document.getElementById("id9");
    if (!stateValidation(state.value.trim())) {
      onError(state, "State not selected", idState);
    }
    else {
      onSuccess(state, idState);
      return true;
    }
  }

  function departmentValidate()
  {
    var idDep=document.getElementById("depSmall")
    if (!departmentValidation(department.value.trim())) {
      onError(department, "Department not selected", idDep);
    }
    else {
      onSuccess(department, idDep);
      return true;
    }
  }

  function checkValidate()
  {
    var idCheck=document.getElementById("checkSmall");
    if (!checkValidation(check.value.trim())) {
      onError(check, "check not selected", idCheck);
    }
    else {
      onSuccess(check, idCheck);
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
let check=document.getElementById("check");


firstName.addEventListener('blur', firstNameValidate);
lastName.addEventListener('blur', lastNameValidate);
emailId.addEventListener('blur', emailIdValidate)
setDate.addEventListener('blur', dateValidate);
state.addEventListener('blur', stateValidate);
phoneNo.addEventListener('blur', phoneNumberValidate);
department.addEventListener('blur', departmentValidate);
check.addEventListener('blur', checkValidate);


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

  function phoneNumberValidation(phoneNo) {
    var phoneNumberRegx = /^[6-9]{1}[0-9]{9}$/;
    if (phoneNo.match(phoneNumberRegx)) {
      return true;
    }
    else {
      return false;
    }
  }

  function stateValidation(state)
  {
    if (state === "") {
      return false;
    }
    else {
      return true;
    }
  }

  function departmentValidation(department)
  {
    if (department === "") {
      return false;
    }
    else {
      return true;
    }
  }

function checkValidation(check)
{
  if(check.checked===false)
  {
    return false;
  }
  else
  {
    return true;
  }
}
  function validateForm() 
  {
    if (department.value.trim() === "") 
    {
      document.getElementById("depSmall").innerHTML = "This field is neccesary";
      if(check.checked==false)
      {
        document.getElementById("checkSmall").innerHTML = "This field is neccesary";
      }
    }  
    else
    {
      if(departmentValidate()== true && check.checked==true)
      {
        return true;
      }
    }
    return false;
  
    
  }