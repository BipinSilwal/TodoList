
const addForm = document.querySelector('.add');
const ul = document.querySelector('.list-items');
const searching = document.querySelector('.searching');


addForm.addEventListener('submit', e=>{

        e.preventDefault();

        const todo = addForm.add.value.trim();

        if(todo.length){

            const html = `
            <li class="list">
            <span>${todo}</span>
            <button class="delete">delete</button>       
        </li>`
    
        ul.innerHTML += html;
        addForm.reset();

        }
      


});

ul.addEventListener('click', e=>{

 

        if(e.target.classList.contains('delete')){

                e.target.parentElement.remove();

        }
        


});


searching.addEventListener('keyup', ()=>{

    const term = searching.value.trim().toLowerCase();
    
    Array.from(ul.children)
    .filter(list=>!list.textContent.toLowerCase().includes(term))
    .forEach(list=>list.classList.add('filter'));
   
    Array.from(ul.children)
    .filter(list=>list.textContent.toLowerCase().includes(term))
    .forEach(list=>list.classList.remove('filter'));


})