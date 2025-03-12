import('../recipes/recipes.mjs')
  .then(module => {
    const recipes = module.recipes;

    // Function to display all recipes
    function displayRecipes(filteredRecipes) {
      const recipeContainer = document.getElementById('recipe-container'); 

      // Clear any existing content in the container
      recipeContainer.innerHTML = '';

      // Loop through the filteredRecipes array (filtered or all recipes)
      filteredRecipes.forEach(recipe => {
        const recipeCard = document.createElement('div');
        recipeCard.classList.add('recipe-card');

        // Recipe name
        const recipeName = document.createElement('h2');
        recipeName.textContent = recipe.name;

        // Recipe description
        const recipeDescription = document.createElement('p');
        recipeDescription.textContent = recipe.description;

        // Recipe image
        const recipeImage = document.createElement('img');
        recipeImage.src = recipe.image;
        recipeImage.alt = recipe.name;

        // Recipe author
        const recipeAuthor = document.createElement('p');
        recipeAuthor.textContent = `Author: ${recipe.author}`;

        // Recipe cook time
        const recipeCookTime = document.createElement('p');
        recipeCookTime.textContent = `Cook Time: ${recipe.cookTime}`;

        // Recipe ingredients
        const recipeIngredients = document.createElement('ul');
        recipe.recipeIngredients.forEach(ingredient => {
          const li = document.createElement('li');
          li.textContent = ingredient;
          recipeIngredients.appendChild(li);
        });

        // Recipe instructions
        const recipeInstructions = document.createElement('ol');
        recipe.recipeInstructions.forEach(instruction => {
          const li = document.createElement('li');
          li.textContent = instruction;
          recipeInstructions.appendChild(li);
        });

        // Recipe rating
        const recipeRating = document.createElement('p');
        recipeRating.textContent = `Rating: ${recipe.rating} stars`;

        // Append all the elements to the recipe card
        recipeCard.appendChild(recipeName);
        recipeCard.appendChild(recipeImage);
        recipeCard.appendChild(recipeDescription);
        recipeCard.appendChild(recipeAuthor);
        recipeCard.appendChild(recipeCookTime);
        recipeCard.appendChild(recipeIngredients);
        recipeCard.appendChild(recipeInstructions);
        recipeCard.appendChild(recipeRating);

        // Append the recipe card to the container
        recipeContainer.appendChild(recipeCard);
      });
    }

    // Function to handle search
    function handleSearch(event) {
      event.preventDefault(); // Prevent form submission (page refresh)

      const searchTerm = event.target.querySelector('input').value.toLowerCase(); 

      // Filter recipes based on the search term
      const filteredRecipes = recipes.filter(recipe => {
        return (
          recipe.name.toLowerCase().includes(searchTerm) ||  
          recipe.description.toLowerCase().includes(searchTerm)
        );
      });

      // Display filtered recipes (or all if nothing is typed)
      displayRecipes(filteredRecipes);
    }

    // Add event listener for the search form
    const searchForm = document.querySelector('.search form');
    searchForm.addEventListener('submit', handleSearch);

    // Call the function to display all recipes initially
    displayRecipes(recipes);
  })
  .catch(error => {
    console.error('Error loading recipes:', error);
  });
