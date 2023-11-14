const modal = document.querySelector('.backdrop');
const modalBttnOpen = document.querySelector('.modal-bttn-open');
const modalBttnClose = document.querySelector('modal-bttn-close');

const toggleModal = () => modal.classList.toggle('is-hidden');

modalBttnOpen.addEventListener('click', toggleModal);
modalBttnClose.addEventListener('click', toggleModal);
