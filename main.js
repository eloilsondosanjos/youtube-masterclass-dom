// get all keys

const keys = document.querySelectorAll(".key")


// play notes
function playNote(event) {
 // keyCode

 // typed or pressed key

 // if key exists

 //play audio
}

// click with mouse

keys.forEach(function(key) {
  console.log(key.dataset.note)
})

// keyboard type
window.addEventListener("keydown", playNote)