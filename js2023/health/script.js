document.addEventListener('DOMContentLoaded', (event) => {
    const reviewForm = document.getElementById('reviewForm');
    const reviewText = document.getElementById('reviewText');
    const reviewsContainer = document.getElementById('reviewsContainer');

    // Load reviews from local storage
    const loadReviews = () => {
        const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
        reviewsContainer.innerHTML = '';
        reviews.forEach(review => {
            addReviewToDOM(review);
        });
    };

    const addReviewToDOM = (review) => {
        const div = document.createElement('div');
        div.classList.add('review');
        div.textContent = review;
        reviewsContainer.appendChild(div);
    };

    // Handle form submission
    reviewForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const review = reviewText.value.trim();
        if (review) {
            // Save review to local storage
            const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
            reviews.push(review);
            localStorage.setItem('reviews', JSON.stringify(reviews));

            // Add review to DOM
            addReviewToDOM(review);
            reviewText.value = '';
        }
    });

    // Load reviews on page load
    loadReviews();
});
