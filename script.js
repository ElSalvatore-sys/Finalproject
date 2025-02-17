document.addEventListener("DOMContentLoaded", () => {
    const skills = [
        { name: "HTML5", logo: "https://cdn.glitch.global/91f46380-4843-45fc-8f89-d5391f97805b/html-logo.webp?v=1733410468728" },
        { name: "CSS3", logo: "https://cdn.glitch.global/91f46380-4843-45fc-8f89-d5391f97805b/css-logo.webp?v=1733410465480" },
        { name: "JavaScript", logo: "https://cdn.glitch.global/91f46380-4843-45fc-8f89-d5391f97805b/javascript-logo.webp?v=1733410449466" },
        { name: "React", logo: "https://cdn.glitch.global/91f46380-4843-45fc-8f89-d5391f97805b/react-logo.webp?v=1733410462669" },
        { name: "Node.js", logo: "https://cdn.glitch.global/91f46380-4843-45fc-8f89-d5391f97805b/nodejs-logo.webp?v=1733410453090" },
    ];

    const skillsContainer = document.getElementById("skills");

    skills.forEach(skill => {
        const years = Math.floor(Math.random() * 3) + 1; // Generates a random number between 1 and 3
        const skillDiv = document.createElement("div");
        skillDiv.classList.add("skill");

        skillDiv.innerHTML = `
            <img src="${skill.logo}" alt="${skill.name} Logo">
            <span>${skill.name}</span>
            <small>${years} years experience</small>
        `;

        skillsContainer.appendChild(skillDiv);
    });
});
function addRecommendation(event) {
    event.preventDefault(); // Prevent page reload

    const nameInput = document.getElementById("name_input").value.trim();
    const recommendationInput = document.getElementById("recommendation_input").value.trim();
    const recommendationList = document.getElementById("recommendation_list");

    // Validate word count (25-30 words)
    const wordCount = recommendationInput.split(/\s+/).length;
    if (wordCount < 25 || wordCount > 30) {
        alert("Please ensure your recommendation is between 25 and 30 words.");
        return;
    }

    // Create a new recommendation element
    const newRecommendation = document.createElement("div");
    newRecommendation.classList.add("recommendation");

    // Add name if provided
    if (nameInput) {
        newRecommendation.innerHTML = `<strong>${nameInput} says:</strong> "${recommendationInput}"`;
    } else {
        newRecommendation.textContent = `"${recommendationInput}"`;
    }

    // Append the recommendation
    recommendationList.appendChild(newRecommendation);

    // Clear the form
    document.getElementById("name_input").value = "";
    document.getElementById("recommendation_input").value = "";

    // Show success popup
    const popup = document.getElementById("popup");
    popup.style.display = "block";
    setTimeout(() => {
        popup.style.display = "none";
    }, 2000);

    console.log("Recommendation added successfully!");
}
function showPopup() {
    const popup = document.getElementById("popup");
    popup.style.display = "flex"; // Show the popup (flex for centering)
}

function closePopup() {
    const popup = document.getElementById("popup");
    popup.style.display = "none"; // Hide the popup
}

function addRecommendation(event) {
    event.preventDefault(); // Prevent form submission

    const nameInput = document.getElementById("name_input").value.trim();
    const recommendationInput = document.getElementById("recommendation_input").value.trim();
    const recommendationList = document.getElementById("recommendation_list");

    // Validate word count (25-30 words)
    const wordCount = recommendationInput.split(/\s+/).length;
    if (wordCount < 25 || wordCount > 30) {
        alert("Please ensure your recommendation is between 25 and 30 words.");
        return;
    }

    // Create a new recommendation element
    const newRecommendation = document.createElement("div");
    newRecommendation.classList.add("recommendation");

    // Add name if provided
    if (nameInput) {
        newRecommendation.innerHTML = `<strong>${nameInput} says:</strong> "${recommendationInput}"`;
    } else {
        newRecommendation.textContent = `"${recommendationInput}"`;
    }

    // Append the recommendation
    recommendationList.appendChild(newRecommendation);

    // Clear the form
    document.getElementById("name_input").value = "";
    document.getElementById("recommendation_input").value = "";

    // Show success popup
    showPopup();
}
