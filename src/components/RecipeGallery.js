import RecipesInfo from "./RecipesInfo"

const RecipeGallery = (props) => {

    const displayRecipes = () => {
        props.recipes.map((recipe) => {
            return (
                <li>{recipe.recipe.label}</li>
            )
        })
    }

    return (
        <section>
            <h2>Random Recipes based on your search!</h2>

            <ul className="recipes">
                {
                    props.recipes.map((recipe) => {
                        return (
                            <RecipesInfo 
                            
                            recipeName = {recipe.recipe.label}
                            fullRecipe = { recipe.recipe.url}

                            photoUrl = { recipe.recipe.image}

                            altText = { recipe.recipe.label}
                            
                            key={recipe.recipe.calories}
                            />
                        )
                    })
                }
            </ul>
        </section>
    )
}

export default RecipeGallery;