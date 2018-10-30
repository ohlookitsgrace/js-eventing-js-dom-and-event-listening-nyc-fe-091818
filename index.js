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
  if (event.which === 74) {
    event.preventDefault()
  }
}

const input = document.querySelector('input')

input.addEventListener('keydown', onKeyDown)

const divs = document.querySelectorAll('div')
console.log(divs)

divs[2].addEventListener('click', onDivClick)

function onDivClick(event) {
  console.log(event)
}

//for (let div of divs) {
//  div.addEventListener('click', onDivClick)
}

function bubble(e) {
console.log(this.firstChild.nodeValue.trim() + ' bubbled')
}
 
for (const aDiv of divs) {
  aDiv.addEventListener('click', bubble);
}
