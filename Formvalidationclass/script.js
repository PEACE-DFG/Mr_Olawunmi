// check if the userData exists in the local storage
const storedUserData = JSON.parse(localStorage.getItem('userData'));
if(!storedUserData){
  alert('User data not found');
  window.location.href='index.html';
}

const loginForm = document.getElementById('login-form');
const loginEmail= document.getElementById('login-email');
const loginPassword = document.getElementById('login-password');


loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const emailValue= loginEmail.value.trim();
  const passwordValue= loginPassword.value.trim();

  if(emailValue === storedUserData.email && passwordValue === storedUserData.password){
    alert('Successfully logged in');
    window.location.href='home.html';
  }else{
    alert('Invalid details')
  }

})