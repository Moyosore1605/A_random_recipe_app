const API_KEY = "c5d5d261bdfd4fa785665efaae3d7b15";

const recipeListEL = document.getElementById('recipe-list')

const displayRecipes =(recipes)=>{
    recipeListEL.innerHTML = ""
    recipes.forEach((recipe)=>{
        const recipeItemEL = document.createElement('li')
        recipeItemEL.classList.add('recipe-item')
        recipeListEL.appendChild(recipeItemEL)
        const recipeImageEL = document.createElement('img')
        recipeImageEL.src = recipe.image
        recipeImageEL.alt = 'recipe image'
        recipeItemEL.appendChild(recipeImageEL)
        const recipeHeaderEL = document.createElement('h2')
        recipeHeaderEL.innerText = recipe.title
        recipeItemEL.appendChild(recipeHeaderEL)
        const recipeIngredientEL = document.createElement('p')
        recipeIngredientEL.innerHTML = `<strong>Ingredients:</strong>
        ${recipe.extendedIngredients.map((ingredient)=>ingredient.original).join(', ')}`
        recipeItemEL.appendChild(recipeIngredientEL)
        const recipeLinkEL = document.createElement('a')
        recipeLinkEL.href = recipe.sourceUrl
        recipeLinkEL.target = "_blank"
        recipeLinkEL.innerText = 'View Recipe'
        recipeItemEL.appendChild(recipeLinkEL)
    })
}

const getRecipes = async ()=>{
    const response = await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`)
    const data = await response.json()
    return data.recipes
}

const init = async () =>{
    const recipes = await getRecipes()
    displayRecipes(recipes)
}

init()