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

divs[3].addEventListener('click', onDivClick)

function onDivClick(event) {
  event.stopPropagation()
  console.log(this.firstChild.nodeValue.trim() + ' bubbled')
}

//for (let div of divs) {
//  div.addEventListener('click', onDivClick)
//}

 
for (const aDiv of divs) {
  aDiv.addEventListener('click', bubble);
}
