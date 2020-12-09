const form = document.querySelector('.signup-form');
// const username = document.querySelector('#username');
const feedback = document.querySelector('.feedback');
const usernamePattern = /^[a-zA-Z]{6,12}$/;

form.addEventListener('submit', e => {
  e.preventDefault();
  // console.log(username.value);
  // console.log(form.username.value);

  // Validation
  const username = form.username.value;
 
  
  if(usernamePattern.test(username)){
    //feedback good info 
    feedback.textContent = 'that username is valid'
  } else {
    //feedback help info 
    feedback.textContent = 'username must contain letters only and must be between 6 and 12 characters long'

  }

});

// Testing RegEx

// const username  = 'shaaun';
// const pattern = /^[a-z]{6,}$/;

// // let result = pattern.test(username);
// // console.log(result);

// // if(result) {
// //   console.log('regex test passed :)');
// // } else {
// //   console.log('regex test failed :(');
// // }

// let result = username.search(pattern);
// console.log(result);


// Live feedback

form.username.addEventListener('keyup', e => {
  // console.log(e.target.value, form.username.value); // daju isto, ali je bolje koristiti prvu varijantu, npr ako dodje do menjanja naziva forme
  if(usernamePattern.test(e.target.value)){
    form.username.setAttribute('class', 'success');
  } else {
    form.username.setAttribute('class', 'error');

  }
})
