
//function for searching cocktail by name
async function nameSearch() {

    //get the value of the inputted name 
    const name = document.getElementById('cocktailName').value;

    //put the name inside the api link and fetch the response
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`);

    //await the response and turn it into json
    const data = await response.json();

    //display the results using the data
    displayResults(data);
}

//function for searching cocktail by id
async function idSearch() {

    //get the id from input box
    const id = document.getElementById('cocktailId').value;

    //put the id inside the api link and fetch the response
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);

    //await the response and turn it into json
    const data = await response.json();

    //display the results using the data
    displayResults(data);
}

//function for getting a random cocktail
async function randomCocktail() {

    //fetch a random cocktail and put in into response
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');

    //await the response and turn it into json
    const data = await response.json();

    //display the results using the data
    displayResults(data);
}


async function searchIngredientByName() {
    const ingredientName = document.getElementById("ingredient-name").value;
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${ingredientName}`);
    const data = await response.json();
    const resultsList = document.getElementById("ingredient-results");


}

//function for displaying results of queries
function displayResults(data) {

    //set null
    resultDiv.innerHTML = '';

    //if the data.drinks object recieved is not empty
    //then for each drink inside the object, display it onto screen
    if (data.drinks) {
        data.drinks.forEach(drink => {
            const drinkDiv = document.createElement('div');
            drinkDiv.innerHTML = `<h3>${drink.strDrink}</h3><img src="${drink.strDrinkThumb}" alt="${drink.strDrink}" width="100">`;
            resultDiv.appendChild(drinkDiv);
        });
    } else {
        //if no results found, print error
        resultDiv.innerHTML = '<p>No results found.</p>';
    }

    if (data.ingredients) {
        data.ingredients.forEach(ingredient => {
            const li = document.createElement("li");
            li.innerText = `${ingredient.strIngredient}: ${ingredient.strDescription || 'No description available'}`;
            resultsList.appendChild(li);
        });
    } else {
        const li = document.createElement("li");
        li.innerText = 'No ingredients found';
        resultsList.appendChild(li);
    }
}