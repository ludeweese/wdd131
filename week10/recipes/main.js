// modules import
import html from "./html.mjs";
import recipes from "./recipes.mjs";

// Global values
const randomNumber = function(n) { return Math.floor(Math.random() * n); };
const recipe = recipes[randomNumber(recipes.length)];
const recipeBook = document.querySelector("main");
const searchBar = document.querySelector("#input");
const searchButton = document.querySelector("#button");

/**GET_RECIPES()
 * Filter, sort, and display recipes matching search terms.
 * @param {array of strings} searchTerms - Array of search terms from user.
 */
function getRecipes(searchTerms) {
  if (!Array.isArray(searchTerms)) {
    console.error("searchTerms should be an array");
    return;
  }

  // Count number of hits on search terms
  recipes.forEach(recipe => {
    recipe.hits = 0;
    searchTerms.forEach(term => {
      if (recipe.author.toLowerCase().includes(term)) recipe.hits++;
      if (recipe.description.toLowerCase().includes(term)) recipe.hits++;
      if (recipe.name.toLowerCase().includes(term)) recipe.hits++;
      recipe.tags.forEach(tag => {
        if (tag.toLowerCase().includes(term)) recipe.hits++;
      });
      recipe.recipeIngredient.forEach(ingredient => {
        if (ingredient.toLowerCase().includes(term)) recipe.hits++;
      });
    });
  });

  const filteredRecipes = recipes.filter(recipe => recipe.hits > 0);
  console.log("Filtered Recipes: ", filteredRecipes.length); // Log the number of matched recipes

  if (filteredRecipes.length > 0) {
    recipeBook.innerHTML = filteredRecipes
      .sort((a, b) => {
        if (a.hits === b.hits) return a.name.localeCompare(b.name);
        return b.hits - a.hits;
      })
      .map(recipe => html(recipe))
      .join("");
  } else {
    recipeBook.innerHTML = "<p>No recipes found.</p>"; // Show message if no recipes match
  }
}

/**LISTEN()
 * Get search terms to pass to getRecipes().
 * @param {event object} event - Event triggered when user completes a word or 
 * the entire search string.
 */
function listen(event) {
  // Handle both keydown (space or enter) and click events
  if (event.key === " " || event.key === "Enter" || event.type === "click") {
    const searchString = searchBar.value.trim();
    
    if (searchString) {
      if (event.key !== " ") {
        event.preventDefault();
        searchBar.value = "";
      }
      getRecipes(searchString.toLowerCase().split(/\s+/)); // Call getRecipes with search terms
    } else {
      console.log("No search terms entered");
      recipeBook.innerHTML = recipes
        .map(recipe => html(recipe)) // Display all recipes if no search term is entered
        .join("");
    }
  }
}

// Event listeners
searchBar.addEventListener("keydown", listen);
searchButton.addEventListener("click", listen);

// Display a random recipe when the page loads
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM Content Loaded");
  recipeBook.innerHTML = html(recipe); // Display a random recipe initially
});
