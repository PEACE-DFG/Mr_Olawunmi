// creating an event in which all the datas are to be checked

const form = document.getElementById('form');
const username= document.getElementById('username');
const email = document.getElementById('email');
const password=document.getElementById('password');	
const password2=document.getElementById('password2');


// stop the refreshing process
form.addEventListener('submit',(e)=>{
  e.preventDefault();

  // then we call a function
  checkInputs();
})


function checkInputs(){
  // get the vaues for the inputs
  const usernameValue=username.value.trim();
  const emailValue=email.value.trim();
  const passwordValue=password.value.trim();
  const password2Value=password2.value.trim();

  // conditions of validation
  if(usernameValue=== ""){
    // show error message
    // add error class
    // create a function if the username is empty
    setErrorFor(username,'Username cannot be left blank')
  }
  else{
    // add success class
    // create a function for the success class
    setSuccessFor(username,'')
  }
  if(emailValue=== ""){
    // show error message
    // add error class
    // create a function if the username is empty
    setErrorFor(email,'Email cannot be left blank')
  }
  else{
    // add success class
    // create a function for the success class
    setSuccessFor(email,'')
  }
  if(passwordValue=== ""){
    // show error message
    // add error class
    // create a function if the username is empty
    setErrorFor(password,'Password cannot be left blank')
  }
  else{
    // add success class
    // create a function for the success class
    setSuccessFor(password,'')
  }
  if(password2Value===''){
    setErrorFor(password2,'Password cannot be left blank')
  }else if(password.value.trim()!==password2.value.trim()){
    setErrorFor(password2,'Password do not match');
  }
  else{
    setSuccessFor(password2,' ')

    const userData ={
      username:usernameValue,
      email:emailValue,
      password:passwordValue
    };

    console.log(userData);
    // convert the userData to a JSON string  and stor it in the local storage
    localStorage.setItem('userData', JSON.stringify(userData));
    window.location.href='login.html'
  }
}



function setErrorFor(input,message){
  // add the error class
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  // add error meesage
  small.innerText=message;
  formControl.className='form-control error'
}

function setSuccessFor(input,message){
  // add the success class
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  // add success meesage
  small.innerText=message;
  formControl.className='form-control success'
}