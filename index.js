//1. Get the element
const main = document.querySelector
  ('main')

//2. Add an event listener
function onClick() {
  alert('i was clicked')
}

main.addEventListener('click', onClick)

function onKeyDown(event) {
  console.log(event)
}

const input = document.querySelector('input')

input.addEventListener('keydown', onKeyDown)
