const button = document.querySelector('.add');
const cards = document.querySelector('.cards');
const colors = document.querySelectorAll('.color').forEach((item) =>{
    const color = item.getAttribute('data-color')
    item.style.backgroundColor = color
    
})

let activeElement = null;
document.querySelectorAll('.color').forEach((item) =>{
    item.addEventListener('mousedown', (e) =>{
        if(e === activeElement){
            item.classList.remove('add')
            activeElement = null
        }else{
       if(activeElement){
              activeElement.classList.remove('add');
       }
        item.classList.add('add')
        activeElement = item
        }
      
    })
})

const buttoi =  button.addEventListener('mousedown', () =>{
    const div = document.createElement('div');
    console.log(div);
    div.classList.add('card')
    if(activeElement){
   let color = activeElement.getAttribute('data-color')
    

div.style.backgroundColor = color
    cards.appendChild(div)
    }
    else{
        cards.appendChild(div)
    }
})


// const name = list.getAttribute('data-color')