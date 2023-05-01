const form = document.getElementById('form-exercise');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const registration = document.getElementById('registration');
  const previousClasses = document.getElementById('boxes');
  const checkboxes = previousClasses.querySelectorAll('input[type="checkbox"]');
  const anythingElse = document.getElementById('anything-else');
  const noSubmission = 'no submission';

  if (!name.value && !email.value) {
    console.warn('You must enter some data to submit this form');
  } else {
    console.group('========= Form Submission =========');

    console.log('Name: ', name.value ? name.value : noSubmission);
    console.log('Email: ', email.value ? email.value : noSubmission);

    if (registration.value && registration.value != 'Choose an Option') {
      console.log('Registration: ', registration.value);
    } else {
      console.log('Registration: ', noSubmission);
    }

    let experience = new String();

    for (let i = 0; i < checkboxes.length; i++) {
      const checkbox = checkboxes[i];
      if (checkbox.checked) {
        experience += checkbox.value + ', ';
      }
    }

    if (experience.length > 0) {
      // this trims any whitespace AND the leftover comma
      experience = experience.trim().slice(0, -1);
      console.log('Previous Classes:', experience);
    } else {
      console.log('Previous Classes:', noSubmission);
    }

    anythingElse.value
      ? console.log('Anything Else: ', anythingElse.value)
      : console.log('Anything Else: ', noSubmission);
  }

  console.groupEnd();
  event.preventDefault();
}
