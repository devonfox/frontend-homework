const form = document.getElementById('form-exercise');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  let name = document.querySelector("#name");
  let email = document.querySelector("#email");;
  let date = document.querySelector("#date");
  let nosub = "no submission";

  if (!name.value && !email.value) {
    console.warn("You must enter some data to submit this form");
  } else {
    console.group("========= Form Submission =========");
    name.value ? console.log("Username: ", name.value) : console.log("Username: " + nosub);
    email.value ? console.log("Email: ", email.value) : console.log("Email: " + nosub);
    }

    console.groupEnd();
    event.preventDefault();
  }
