// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

document.addEventListener("DOMContentLoaded", () => {
  const like = document.getElementsByClassName('like-glyph')
  for (const l of like) {
    l.addEventListener("click", likeCallback)
  }
});

function likeCallback(e) {
  let heart = e.target;
  if (heart.innerText === FULL_HEART) {
    heart.innerText = EMPTY_HEART;
    heart.removeAttribute('class', 'activated-heart');
  } else if (heart.innerText === EMPTY_HEART) {
    mimicServerCall()
    .then(response => {
      heart.innerText = FULL_HEART;
      heart.setAttribute('class', 'activated-heart');
    })
    .catch(function(error) {
      const modal = document.getElementById('modal');
      modal.removeAttribute('class', 'hidden');
      modal.innerText = "Server Error!";
      setTimeout(() => modal.setAttribute('class', 'hidden'), 3000);
    })
  }
  
}


function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

