const form = document.getElementById('form-exercise');

//console.logs on submit. is this right?
form.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log(event);
});
