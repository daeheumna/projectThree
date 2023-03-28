import RecipesInfo from "./RecipesInfo"

const RecipeGallery = (props) => {

    return (
        <section>
            <div className="wrapper">
                

                <ul className="recipes">
                
                    {
                        props.recipes.map((recipe) => {
                            return (
                                <RecipesInfo 
                                
                                recipeName = {recipe.recipe.label}
                                fullRecipe = {recipe.recipe.url}

                                photoUrl = {recipe.recipe.image}

                                altText = {recipe.recipe.label}

                                calories = {recipe.recipe.calories}
                                
                                ingredients = {recipe.recipe.ingredientLines}

                                carbs = {recipe.recipe.totalNutrients.CHOCDF.quantity}

                                protein = {recipe.recipe.totalNutrients.PROCNT.quantity}

                                fat = {recipe.recipe.totalNutrients.FAT.quantity}

                                portion = {recipe.recipe.yield}

                                key={recipe.recipe.totalWeight}
                                />
                            )
                        })
                    }
                </ul>
            </div>
        </section>
    )
}

export default RecipeGallery;