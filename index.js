//1. Get the element
const main = document.querySelector
  ('main')

//2. Add an event listener
function onClick() {
  alert('i was clicked')
  
}

main.addEventListener('click', 
  onClick)

const input = document
  .querySelector('input')
