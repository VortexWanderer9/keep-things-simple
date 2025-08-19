let newX = 0; newY = 0; startX = 0; startY = 0;
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
    div.innerHTML = `<p class="close"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ff0000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke="#003cff" stroke-width="1.5" stroke-linecap="round"></path> <path d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7" stroke="#003cff" stroke-width="1.5" stroke-linecap="round"></path> </g></svg></p>`;
    if(activeElement){
    let color = activeElement.getAttribute('data-color')
    div.style.backgroundColor = color
    div.style.borderColor = color
    cards.appendChild(div)

    }
    else{
        cards.appendChild(div)
    }
     // Now add the close event listener after the card is added
    const closeButton = div.querySelector('.close svg');
    closeButton.addEventListener('mousedown', () => {
        console.log('Close button clicked!');
        div.remove();
})
makeCardDraggable(div)
})


function makeCardDraggable(element) {
    console.log(element);
    
    element.style.position = 'absolute';
    element.addEventListener('mousedown', mouseDown);

    function mouseDown(e) {
        e.preventDefault(); // Prevent text selection or other default behaviors.

        let startX = e.clientX;
        let startY = e.clientY;
        let origTop = element.offsetTop;
        let origLeft = element.offsetLeft;

        function mouseMove(e) {
            const dx = e.clientX - startX;
            const dy = e.clientY - startY;
            element.style.top = (origTop + dy) + 'px';
            element.style.left = (origLeft + dx) + 'px';
        }

        function mouseUp() {
            document.removeEventListener('mousemove', mouseMove);
            document.removeEventListener('mouseup', mouseUp);
        }

        document.addEventListener('mousemove', mouseMove);
        document.addEventListener('mouseup', mouseUp);
    }
}

// Make existing cards draggable
document.querySelectorAll('.card').forEach(makeCardDraggable);
document.querySelectorAll('.card').forEach((item) => {
  const noteInput = item.querySelector('input[name="note"]');
  noteInput.addEventListener('mousedown', (e) => {
    e.stopPropagation();
    console.log(e.target.value);
  });
});
