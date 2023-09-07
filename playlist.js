let submit = document.querySelector('.submit-button');
let input = document.querySelector('.input-password');
let hiddenPlaylists = document.querySelectorAll('.none');

function checkInputValue() {
  let inputValue = input.value;

  if (inputValue === 'marko257.2') {
    hiddenPlaylists.forEach(function(hiddenPlaylist) {
      hiddenPlaylist.classList.remove('none');
    });
    submit.style.display = 'none';
    input.style.display = 'none';
  } else {
    alert('Wrong Password!');
  }
}

submit.addEventListener('click', checkInputValue);

input.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    checkInputValue();
  }
});
