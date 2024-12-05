function addRecommendation() {
  const name = document.getElementById('name').value;
  const message = document.getElementById('message').value;

  if (message) {
    const recommendationDiv = document.createElement('div');
    recommendationDiv.classList.add('recommendation');
    recommendationDiv.innerHTML = `<p>"${message}"</p>`;
    document.querySelector('.recommendations').appendChild(recommendationDiv);

    showPopup(true);
  }
}

function showPopup(success) {
  alert(success ? "Recommendation added successfully!" : "Failed to add recommendation.");
}
