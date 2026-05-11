const ratingButtons = document.querySelectorAll('.ratingbutton');
const submitButton = document.querySelector('.submitButton');
const thankYouState = document.querySelector('.thank-you-state');
const ratingState = document.querySelector('.ratingwindow');
let selectedRating = 0;

ratingButtons.forEach(button => {
    button.addEventListener('click', function() {
        ratingButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        selectedRating = parseInt(this.value);
    });
});

function submitRating() {
    if (selectedRating > 0) {
        ratingState.classList.add('hidden');
        thankYouState.classList.remove('hidden');
        thankYouState.querySelector('.selected-rating').textContent = selectedRating;
    }
}