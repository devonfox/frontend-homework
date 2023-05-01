const interval = document.getElementById('interval');
const button = document.getElementById('toggle');
let buttonState = false;

addEventListener('load', () => {
  // loading random background color on page load
  setRandomBackgroundColor();
});

// creating a setInterval id per MDN docs
let id;

button.addEventListener('click', (event) => {
  event.preventDefault(); // not sure if this necessary? todo: ask prof

  // on click change buttonState
  buttonState = !buttonState;
  button.classList.toggle('btn-primary', !buttonState);
  button.classList.toggle('btn-danger', buttonState);
  button.value = buttonState ? 'Stop' : 'Start';

  /* if nothing set, set interval to 3 seconds, and
       multiply value in input by 1000 (for milliseconds) */
  if (buttonState) {
    let intervalAmount = interval.value === '' ? 3000 : interval.value * 1000;
    changeColor();
    id = setInterval(changeColor, intervalAmount);
  } else {
    // clearing setInterval calls
    clearInterval(id);
  }
});

const changeColor = function setRandomBackgroundColor() {
  // Using hsla, and dimming alpha value per instruction pdf
  document.body.style.backgroundColor = getRandomColor();
};

function getRandomColor() {
  return `hsla(${Math.floor(
    Math.random() * 360,
  )}, ${Math.floor(Math.random() * 50) + 20}%, ${
    Math.floor(Math.random() * 50) + 20
  }% ,${Math.random() * 0.8})`;
}
