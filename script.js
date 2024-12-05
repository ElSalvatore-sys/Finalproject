function addRecommendation() {
    const input = document.getElementById('recommendation_input');
    const value = input.value.trim();

    if (value) {
        const recommendationSection = document.getElementById('recommendations');
        const newRecommendation = document.createElement('div');
        newRecommendation.classList.add('recommendation');
        newRecommendation.textContent = value;
        recommendationSection.insertBefore(newRecommendation, input);

        showPopup(true);
        input.value = '';
    }
}

function showPopup(show) {
    const popup = document.getElementById('popup');
    popup.style.display = show ? 'block' : 'none';

    if (show) {
        setTimeout(() => popup.style.display = 'none', 3000);
    }
}
