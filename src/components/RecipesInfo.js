const RecipesInfo = (props) => {
    return (
        <li className="recipe-container">

            <h3>{props.recipeName}</h3>
            
            <div className="info-container">
                <div className="gallery">
                    <figure className='photo-container'>
                        <img src={props.photoUrl} alt={props.altText}></img>
                    </figure>
                    <div className="caption">
                        <ul>
                            {props.ingredients.map((item, index)=>{
                                return(
                                    <li key={index}>{item}</li>
                                )
                            })
                            }
                        </ul>
                    </div>
                </div>

                <div className="text-container">
                    <p><strong>Portion Size: </strong> {props.portion} servings</p>

                    <p><strong>Calories: </strong>{Math.round(props.calories *100)/100}</p>

                    <div className="macros">
                        <h4>Macros: {props.macros}</h4>
                        <p>Carbs: {Math.round(props.carbs *100)/100}g | 
                        Protein: {Math.round(props.protein *100)/100}g | 
                        Fat: {Math.round(props.fat *100)/100}g</p>
                    </div>
                </div>
            </div>
            <a href={ props.fullRecipe } target='_blank' rel="noreferrer">View Full Recipe</a>
        </li>
    )
}

export default RecipesInfo;