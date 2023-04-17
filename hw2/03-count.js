const input = document.querySelector('input');

input.addEventListener('keydown', handleKeyDown);

function handleKeyDown(event) {
  if (event.key == 'Enter') {
    const inputString = event.target.value.trim();
    const ipsum = document.getElementById('ipsum');

    /* 
       found this cool regex "\b" to find word boundaries,
       instead of just splitting on spaces 
    */
    const words = ipsum.textContent.split(/\b/);

    if (inputString === '') {
      // empty string as input to "clear" highlights
      ipsum.innerHTML = words.join('');
    } else {
      // maps are great, using to highlight matching words
      ipsum.innerHTML = words
        .map((word) => {
          // using regex to only highlight word, and no special chars
          const stripped = word.replace(/^[^a-zA-Z]+|[^a-zA-Z]+$/g, '');

          // ternary expression to return styled highlighted word or just the word
          return stripped === inputString
            ? `<text style="background-color: #ffff00">${word}</text>`
            : word;
        })
        .join('');
    }
  }
}
