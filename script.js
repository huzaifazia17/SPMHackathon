// Search cocktail by name
function searchCocktail() {
    const searchQuery = document.getElementById("searchCocktail").value;

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchQuery}`)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Failed to fetch cocktail");
            }
        })
        .then(data => {
            const result = document.getElementById("result");
            result.innerHTML = "";

            if (data.drinks === null) {
                result.innerHTML = "No cocktails found";
            } else {
                data.drinks.forEach(drink => {
                    const drinkDiv = document.createElement("div");
                    drinkDiv.innerHTML = `
              <h3>${drink.strDrink}</h3>
              <img src="${drink.strDrinkThumb}">
              <p>${drink.strInstructions}</p>
            `;
                    result.appendChild(drinkDiv);
                });
            }
        })
        .catch(error => {
            const result = document.getElementById("result");
            result.innerHTML = `Error: ${error.message}`;
        });
}

// Search ingredients by name
function searchIngredient() {
    const searchQuery = document.getElementById("searchIngredient").value;

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${searchQuery}`)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Failed to fetch ingredients");
            }
        })
        .then(data => {
            const result = document.getElementById("result");
            result.innerHTML = "";

            if (data.ingredients === null) {
                result.innerHTML = "No ingredients found";
            } else {
                data.ingredients.forEach(ingredient => {
                    const ingredientDiv = document.createElement("div");
                    ingredientDiv.innerHTML = `
              <h3>${ingredient.strIngredient}</h3>
              <img src="https://www.thecocktaildb.com/images/ingredients/${ingredient.strIngredient}-Small.png">
            `;
                    result.appendChild(ingredientDiv);
                });
            }
        })
        .catch(error => {
            const result = document.getElementById("result");
            result.innerHTML = `Error: ${error.message}`;
        });
}

// Lookup full cocktail details by ID
function lookupCocktail() {
    const lookupId = document.getElementById("lookupCocktail").value;

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${lookupId}`)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Failed to fetch cocktail details");
            }
        })
        .then(data => {
            const result = document.getElementById("result");
            result.innerHTML = "";

            if (data.drinks === null) {
                result.innerHTML = "Cocktail not found";
            } else {
                const drink = data.drinks[0];
                const drinkDiv = document.createElement("div");
                drinkDiv.innerHTML = `
            <h3>${drink.strDrink}</h3>
            <img src="${drink.strDrinkThumb}">
            <p>${drink.strInstructions}</p>
            <h4>Ingredients</h4>
          `;
                result.appendChild(drinkDiv);

                const ingredients = [];
                for (let i = 1; i <= 15; i++) {
                    if (drink[`strIngredient${i}`]) {
                        ingredients.push(`${drink[`strIngredient${i}`]} - ${drink[`strMeasure${i}`]}`);
                    }
                }

                const ingredientsList = document.createElement("ul");
                ingredients.forEach(ingredient => {
                    const ingredientItem = document.createElement("li");
                    ingredientItem.innerText = ingredient;
                    ingredientsList.appendChild(ingredientItem);
                });
                result.appendChild(ingredientsList);
            }
        })
        .catch(error => {
            const result = document.getElementById("result");
            result.innerHTML = `Error: ${error.message}`;
        });
}

// Lookup a random cocktail
function randomCocktail() {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Failed to fetch random cocktail");
            }
        })
        .then(data => {
            const result = document.getElementById("result");
            result.innerHTML = "";

            const drink = data.drinks[0];
            const drinkDiv = document.createElement("div");
            drinkDiv.innerHTML = `
          <h3>${drink.strDrink}</h3>
          <img src="${drink.strDrinkThumb}">
          <p>${drink.strInstructions}</p>
          <h4>Ingredients</h4>
        `;
            result.appendChild(drinkDiv);

            const ingredients = [];
            for (let i = 1; i <= 15; i++) {
                if (drink[`strIngredient${i}`]) {
                    ingredients.push(`${drink[`strIngredient${i}`]} - ${drink[`strMeasure${i}`]}`);
                }
            }

            const ingredientsList = document.createElement("ul");
            ingredients.forEach(ingredient => {
                const ingredientItem = document.createElement("li");
                ingredientItem.innerText = ingredient;
                ingredientsList.appendChild(ingredientItem);
            });
            result.appendChild(ingredientsList);
        })
        .catch(error => {
            const result = document.getElementById("result");
            result.innerHTML = `Error: ${error.message}`;
        });
}

// Search by ingredient
function searchByIngredient() {
    const searchQuery = document.getElementById("searchByIngredient").value;

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${searchQuery}`)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Failed to fetch cocktails by ingredient");
            }
        })
        .then(data => {
            const result = document.getElementById("result");
            result.innerHTML = "";

            if (data.drinks === null) {
                result.innerHTML = "No cocktails found";
            } else {
                data.drinks.forEach(drink => {
                    const drinkDiv = document.createElement("div");
                    drinkDiv.innerHTML = `
              <h3>${drink.strDrink}</h3>
              <img src="${drink.strDrinkThumb}">
              <p>${drink.strInstructions}</p>
            `;
                    result.appendChild(drinkDiv);
                });
            }
        })
        .catch(error => {
            const result = document.getElementById("result");
            result.innerHTML = `Error: ${error.message}`;
        });
}

