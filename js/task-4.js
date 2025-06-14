const form = document.querySelector('.login-form');
form.addEventListener('submit', function(events) {
   const {email, password} = form.elements;
   console.log(email, password);
   const trimedEmail = email.value.trim();
   const trimedPassword = password.value.trim();
   if (trimedEmail === '' || trimedPassword === ''){
    alert('All form fields must be filled in');
    return;
   }
   const formData = {
    email: trimedEmail,
    password: trimedPassword,
   };
    console.log(formData); 

    form.reset();
});