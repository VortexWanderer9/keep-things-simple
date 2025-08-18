const button = document.querySelector('.add');
const cards = document.querySelector('.cards');
const colors = document.querySelectorAll('.color').forEach((item) =>{
    const color = item.getAttribute('data-color')
    item.style.backgroundColor = color
    
})
let activeElement = null;

document.querySelectorAll('.color').forEach((item) => {
  item.addEventListener('mousedown', (e) => {
    if (activeElement === e.currentTarget) {
      activeElement.classList.remove('add');
      activeElement = null;
    } else {
      if (activeElement) {
        activeElement.classList.remove('add');
      }
      item.classList.add('add');
      activeElement = item;
    }
  });
});

button.addEventListener('mousedown', () =>{
    const div = document.createElement('div');
    console.log(div);
    div.classList.add('card')
    div.innerHTML = `<p class="close"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ff0000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke="#003cff" stroke-width="1.5" stroke-linecap="round"></path> <path d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7" stroke="#003cff" stroke-width="1.5" stroke-linecap="round"></path> </g></svg></p>`
    if(activeElement){
    let color = activeElement.getAttribute('data-color')
    div.style.backgroundColor = color
    cards.appendChild(div)

    }
    else{
        cards.appendChild(div)
    }

     // Now add the close event listener after the card is added
    const closeButton = div.querySelector('.close');
    closeButton.addEventListener('mousedown', () => {
        console.log('Close button clicked!');
        div.remove();
})
})



// const name = list.getAttribute('data-color')