function addRecommendation(event) {
    event.preventDefault(); // Prevent form submission
    const input = document.getElementById('recommendation_input');
    const value = input.value.trim();

    if (value) {
        const recommendationSection = document.getElementById('recommendations');
        const newRecommendation = document.createElement('div');
        newRecommendation.classList.add('recommendation');
        newRecommendation.textContent = `"${value}"`; // Add quotation marks
        recommendationSection.insertBefore(newRecommendation, recommendationSection.lastElementChild);

        showPopup(true); // Optional popup notification
        input.value = ''; // Clear the textarea
    }
}

function showPopup(show) {
    const popup = document.getElementById('popup');
    popup.style.display = show ? 'block' : 'none';

    if (show) {
        setTimeout(() => popup.style.display = 'none', 3000);
    }
}
