const elem = document.querySelector('input');

elem.addEventListener('input', handleInput);

function handleInput(event) {
  const input = event.target.value;
  const resultDiv = document.getElementById('result');

  /* isNaN doesn't work on Firefox if incorrect chars are entered.
     this approach was suggested by Prof. Paun */
  if (input.length === 0 || isNaN(input)) {
    resultDiv.textContent = 'Invalid number. Contains non-numeric characters.';
    resultDiv.classList.remove('text-success');
    resultDiv.classList.add('text-danger');
  } else if (parseInt(input) < 0) {
    resultDiv.textContent = 'Please enter a positive number.';
    resultDiv.classList.remove('text-success');
    resultDiv.classList.add('text-danger');
  } else if (isPalindrome(input)) {
    resultDiv.textContent = 'Yes. This is a palindrome!';
    resultDiv.classList.remove('text-danger');
    resultDiv.classList.add('text-success');
  } else {
    resultDiv.textContent = 'No. Try again.';
    resultDiv.classList.remove('text-success');
    resultDiv.classList.add('text-danger');
  }
}

/* this function could probably be simplified with a function approach
   as seen online, but this works :) */s
function isPalindrome(input) {
  let reversedInput = '';
  for (i = input.length - 1; i >= 0; i--) {
    reversedInput += input[i];
  }
  if (input === reversedInput) {
    return true;
  }
  return false;
}
