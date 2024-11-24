// Import recipes from the recipes module
import recipes from './recipes.mjs';

// Generate a random number between 0 and max (exclusive)
function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
}

// Get a random entry from an array
function getRandomListEntry(list) {
    return list[getRandomNumber(list.length)];
}

// Generate HTML template for tags
function tagsTemplate(tags) {
    let html = '<ul class="recipe__tags">';
    // Loop through tags and create list items
    tags.forEach(tag => {
        html += `<li>${tag}</li>`;
    });
    html += '</ul>';
    return html;
}

// Generate HTML template for star ratings
function ratingTemplate(rating) {
    let html = `<span
        class="rating"
        role="img"
        aria-label="Rating: ${rating} out of 5 stars"
    >`;
    
    // Add filled or empty stars based on rating
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            html += '<span aria-hidden="true" class="icon-star">⭐</span>';
        } else {
            html += '<span aria-hidden="true" class="icon-star-empty">☆</span>';
        }
    }
    
    html += '</span>';
    return html;
}

// Generate HTML template for a recipe
function recipeTemplate(recipe) {
    return `<figure class="recipe-card">
        <img src="${recipe.image}" alt="image of ${recipe.name}" />
        <figcaption class="recipe-content">
            ${tagsTemplate(recipe.tags)}
            <h2><a href="#">${recipe.name}</a></h2>
            <p class="rating">
                ${ratingTemplate(recipe.rating)}
            </p>
            <p class="description">
                ${recipe.description}
            </p>
        </figcaption>
    </figure>`;
}

// Filter recipes based on search query
function filterRecipes(query) {
    const filtered = recipes.filter(recipe => {
        const searchTerms = [
            recipe.name.toLowerCase(),
            recipe.description.toLowerCase(),
            ...recipe.tags.map(tag => tag.toLowerCase()),
            ...recipe.recipeIngredient.map(ingredient => ingredient.toLowerCase())
        ];
        
        return searchTerms.some(term => term.includes(query.toLowerCase()));
    });
    
    // Sort alphabetically by name
    return filtered.sort((a, b) => a.name.localeCompare(b.name));
}

// Render recipes to the page
function renderRecipes(recipeList) {
    const outputElement = document.querySelector('[role="main"]');
    const recipesHTML = recipeList.map(recipe => recipeTemplate(recipe)).join('');
    outputElement.innerHTML = recipesHTML;
}

// Handle search form submission
function searchHandler(e) {
    e.preventDefault();
    const searchInput = document.querySelector('.search-wrapper input');
    const query = searchInput.value;
    const filteredRecipes = filterRecipes(query);
    renderRecipes(filteredRecipes);
}

// Initialize the page
function init() {
    // Display a random recipe on page load
    const recipe = getRandomListEntry(recipes);
    renderRecipes([recipe]);
    
    // Add search form event listener
    const searchForm = document.querySelector('.search-form');
    searchForm.addEventListener('submit', searchHandler);
}

// Call init when the DOM is loaded
document.addEventListener('DOMContentLoaded', init);