document.getElementById('recommendation-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const message = document.getElementById('recommendation').value.trim();

    if (message === '') {
        alert('Please enter a recommendation!');
        return;
    }

    const recommendationList = document.querySelector('.recommendation-grid');
    const newCard = document.createElement('div');
    newCard.className = 'recommendation-card';
    newCard.innerHTML = `<p>${message} ${name ? `- ${name}` : ''}</p>`;

    recommendationList.appendChild(newCard);
    alert('Recommendation submitted successfully!');
    document.getElementById('recommendation-form').reset();
});
