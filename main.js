const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener ("click", () => {
    const showNav = hamburger.parentElement.children[1].firstElementChild.classList.remove('active');
})

const closeNavBtn = document.querySelector('.nav-close-btn')

closeNavBtn.addEventListener('click', () => {
    closeNav = closeNavBtn.parentElement.parentElement.parentElement.classList.add('active');
})


const modalBtn = document.querySelector (".modal-btn");

modalBtn.addEventListener("click", () => {
    const showModal = modalBtn.parentElement.parentElement.parentElement.nextElementSibling;
    showModal.classList.add('hide')
    
    const closeBtn = showModal.querySelector('.close')
    closeBtn.addEventListener('click', () => {
        showModal.classList.remove('hide');
    })
})

const selectedCard = document.querySelectorAll('.modal-card');

selectedCard.forEach((selected) => {
    selected.addEventListener('click', () => {
        selectedCard.forEach((unselected) => {
            unselected.children[2].classList.remove('expand'); 
            unselected.classList.remove('glow');
        })
        selected.children[2].classList.add('expand');
        selected.classList.add('glow');
    })

    
}) 


const continueBtn = document.querySelectorAll('.pledge-btn')


continueBtn.forEach((continuation) => {
    continuation.addEventListener('click', () => {
        continuation.parentElement.parentElement.parentElement.parentElement.parentElement.nextElementSibling.classList.add('open-success');
    })
    
    const gotIt = document.querySelector('.got-it')
    
    gotIt.addEventListener('click', () => {
        continuation.parentElement.parentElement.parentElement.parentElement.parentElement.nextElementSibling.classList.remove('open-success'); 
    })
})


