const openModalBtn = document.querySelector('#openModal');
const modalElement = document.querySelector('.modal');
const modalContentElement = modalElement.querySelector('.modal_content');


openModalBtn.addEventListener('click', ()=>{
     modalElement.classList.add('open');
})

modalContentElement.addEventListener('click', () => {
     modalElement.classList.remove('open');
});