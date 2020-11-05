const inputEl = document.querySelector('#height-input');
const buttonEl = document.querySelector('#submit-btn');
const modalEl = document.querySelector('#modal');
const modalValueEl = document.querySelector('#modal-value');

buttonEl.addEventListener('click', () => {
    const inputValue = inputEl.value;
    modalValueEl.innerHTML = inputValue;
    modalEl.style.display = 'block';
})

modalEl.addEventListener('click', (e) => {
    if (e.target.className !== 'modal__close') {
        return;
    }

    modalEl.style.display = 'none';
})