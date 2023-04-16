const input = document.querySelector("input");

input.addEventListener("keydown", handleKeyDown);

function handleKeyDown(event) {
  const inputString = event.target.value.trim();
  if (event.key == "Enter") {
    if (inputString !== "") {
      const ipsum = document.getElementById("ipsum");

      const search = ipsum.textContent.split(/\s+/);

      // Functional methods are so cool!
      const highlighted = search.map((check) => {
        if (check === inputString) {
          // Doesn't quite match style. Look into bootstrap colors.
          return `<text style="background-color: #ffff00">${check}</text>`;
        }
        return check;
      });

      ipsum.innerHTML = highlighted.join(" ");
    }
    else {
        const ipsum = document.getElementById("ipsum");
        const search = ipsum.textContent.split(/\s+/);
        const highlighted = search.map((check) => {
            return check;
          });
          ipsum.innerHTML = highlighted.join(" ");
    }
  }
}
