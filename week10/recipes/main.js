 // modules import
import html from "./html.mjs";
import recipes from "./recipes.mjs";

 // GLobal values
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

  // Filter, sort and display
  recipeBook.innerHTML = recipes
    .filter(recipe => recipe.hits > 0)
    .sort((a, b) => {
      if (a.hits === b.hits) return a.name.localeCompare(b.name);
      return b.hits - a.hits;
    })
    .map(recipe => html(recipe))
    .join("");
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
      getRecipes(searchString.toLowerCase().split(/\s+/));
    } else {
      // Handle case where input is empty
      console.log("No search terms entered");
    }
  }
}

//event listeners
searchBar.addEventListener("keydown", listen);
searchButton.addEventListener("click", listen);
document.addEventListener("DOMContentLoaded", () => {
  recipeBook.innerHTML = html(recipe);
});
