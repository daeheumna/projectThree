const RecipesInfo = (props) => {
    return (
        <li className="recipe-container">

            <h3>{props.recipeName}</h3>
            
            <figure className='photo-container'>
            <img src={props.photoUrl} alt={props.altText}></img>
            </figure>

            <ul><h4>Ingredients:</h4> {props.ingredients.map((item)=>{
                return(
                    <li>{item}</li>
                )
            })}</ul>

            <h4>Portion Size: {props.portion}</h4>

            <h4>Calories: {Math.round(props.calories *100)/100}</h4>

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