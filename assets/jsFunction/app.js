const buyBtns = document.querySelectorAll('.js-buy-tickets')
const modal = document.querySelector('.js-modal')
const modal_close = document.querySelector('.js-modal-close')
const modal_container = document.querySelector('.js-modal-container')
function showbuyTickers() {
    modal.classList.add('open')
}
function hiddenbuyTickets() {
    modal.classList.remove('open')
}
for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showbuyTickers)
}
modal_close.addEventListener('click', hiddenbuyTickets)

modal.addEventListener('click', hiddenbuyTickets)

modal_container.addEventListener('click', function (event) {
    event.stopPropagation()
})