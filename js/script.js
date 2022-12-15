console.log('text')

var letReviewButton = document.getElementById('add-review-btn')
var popupWrp = document.getElementById('popup-wrp')
var popupClose = document.getElementById('popup-close-btn')

letReviewButton.addEventListener('click', () => {
    console.log('test click');
    popupWrp.classList.toggle('popup-close');
})

popupClose.addEventListener('click', () => {
    popupWrp.classList.toggle('popup-close');
})

console.log(letReviewButton)