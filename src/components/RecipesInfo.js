const RecipesInfo = (props) => {
    return (
        <li className="recipe-container">
            <h3>{props.recipeName}</h3>
            <a href={ props.fullRecipe } target='_blank'>View Full Recipe</a>
            <img src={props.photoUrl} alt={props.altText}></img>
        </li>
    )
}

export default RecipesInfo;