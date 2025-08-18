const button = document.querySelector('.add');
const cards = document.querySelector('.cards');
const colors = document.querySelectorAll('.color').forEach((item) =>{
    const color = item.getAttribute('data-color')
    item.style.backgroundColor = color


})

button.addEventListener('mousedown', () =>{
    const div = document.createElement('div');
    console.log(div);
    div.classList.add('card')
    cards.appendChild(div)
    
})

