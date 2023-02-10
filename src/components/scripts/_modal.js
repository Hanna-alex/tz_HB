function reserveModal() {
  const modal = document.querySelector('.header__modal')
  const btnReserve = document.querySelector('.header__btn')
  const btnClose = document.querySelector('.modal__close-btn')

  function closeModal() {
    modal.classList.remove('header__modal_visible')
  }

  btnReserve.addEventListener('click', () => {
    modal.classList.add('header__modal_visible')
  })

  btnClose.addEventListener('click', closeModal)


  document.addEventListener('click', (event) => {
    const target = event.target
    if (target.classList.contains('modal__overlay')) {
      closeModal()
    }
  })
}

reserveModal()
