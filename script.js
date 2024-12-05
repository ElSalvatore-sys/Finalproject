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
    event.preventDefault(); // Prevents form submission and page reload

    const nameInput = document.getElementById('name_input').value.trim();
    const recommendationInput = document.getElementById('recommendation_input').value.trim();

    // Check if recommendation input is not empty
    if (recommendationInput) {
        const recommendationSection = document.getElementById('recommendations');
        const newRecommendation = document.createElement('div');
        newRecommendation.classList.add('recommendation');

        // Construct the recommendation text
        if (nameInput) {
            newRecommendation.innerHTML = `<strong>${nameInput} says:</strong><br>"${recommendationInput}"`;
        } else {
            newRecommendation.textContent = `"${recommendationInput}"`;
        }

        // Insert the new recommendation before the form
        recommendationSection.insertBefore(newRecommendation, recommendationSection.lastElementChild);

        // Clear the form inputs
        document.getElementById('name_input').value = '';
        document.getElementById('recommendation_input').value = '';

        // Log a message indicating the function was triggered
        console.log("addRecommendation function triggered: New recommendation added!");
    } else {
        console.log("addRecommendation function triggered: Recommendation input is empty.");
    }
}
