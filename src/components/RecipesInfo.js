const RecipesInfo = (props) => {
    return (
        <li className="recipe-container">

            <h3>{props.recipeName}</h3>
            
            <img src={props.photoUrl} alt={props.altText}></img>

            <ul>{props.ingredients.map((item)=>{
                return(
                    <li>{item}</li>
                )
            })}</ul>

            <p>Portion Size: {props.portion}</p>

            <p>Calories: {Math.round(props.calories *100)/100}</p>

            <div className="macros">
            <h4>Macros: {props.macros}</h4>
            <p>Carbs: {Math.round(props.carbs *100)/100}g | 
            Protein: {Math.round(props.protein *100)/100}g | 
            Fat: {Math.round(props.fat *100)/100}g</p>
            </div>

            <a href={ props.fullRecipe } target='_blank' rel="noreferrer">View Full Recipe</a>
        </li>
    )
}

export default RecipesInfo;