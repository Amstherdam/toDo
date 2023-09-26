const modalContainer = document.querySelector('#modalDataInput')
const addNewFormBtn = document.querySelector('#addNewFormBtn')
const modalCloseBtn = document.querySelector('#modalClose')


const modalToggle = function () { 
    
    addNewFormBtn.addEventListener('click' , () => { 
        modalContainer.classList.add('modalDataInputOpen')
    });

    modalCloseBtn.addEventListener('click', () => { 
        modalContainer.classList.remove('modalDataInputOpen')
    });
}


export default modalToggle










