'use strict';

const jokeGeneratorButton = document.getElementById('joke-btn');

function randomChuckNorrisJoke() {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'https://api.chucknorris.io/jokes/random', true);

  xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      const data = JSON.parse(this.responseText);

      const div = document.getElementById('joke');

      div.innerHTML = `${data.value}`;
    }
  };
  xhr.send();
}

jokeGeneratorButton.addEventListener('click', randomChuckNorrisJoke);
