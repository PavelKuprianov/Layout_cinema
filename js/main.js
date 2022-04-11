const modalWindow = document.querySelector('.modal');
const buttonsModal = document.querySelectorAll('.button-play');
const iframe = document.querySelector('iframe');

buttonsModal.forEach((item, i) => {
  item.addEventListener('click', () => {
    modalWindow.classList.add('active');
    iframe.src = 'https://www.youtube.com/embed/-HhRCzBr4ac';
  });
});

modalWindow.addEventListener('click', () => {
  modalWindow.classList.remove('active');
  iframe.src = '';
})

