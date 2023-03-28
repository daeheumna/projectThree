

const AdvancedForm = (props) => {


    return (
            <form onSubmit={props.handleSubmit}>
                <label htmlFor='ingredients' className='sr-only'>ingredients</label>
                <input type='text' id='ingredients' onChange={props.handleChange} value={props.typedValue} required placeholder='ingredients'></input>

                <label htmlFor='mealType'>Meal Type</label>
                <select onChange={props.handleMealType}
                value={props.mealType} id='mealType'>
                    <option value=''>Meal Type</option>
                    <option value="breakfast">Breakfast</option>
                    <option value="lunch">Lunch</option>
                    <option value="dinner">Dinner</option>
                    <option value="snack">Snack</option>
                    <option value="teatime">Teatime</option>
                    
                </select>

                <label>Diet</label>
                <select onChange={props.handleDiet}
                value={props.diet}>
                    <option value='placeholder'></option>
                    <option value="balanced">Balanced</option>
                    <option value="high-fiber">High-Fiber</option>
                    <option value="high-protein">High-Protein</option>
                    <option value="low-carb">Low-Carb</option>
                    <option value="low-fat">Low-Fat</option>
                    <option value="low-sodium">Low-Sodium</option>
                </select>

                <label>Dish Type</label>
                <select onChange={props.handleDishType}
                value={props.dishType}>
                    <option value='placeholder'></option>
                    <option value="alcohol cocktail">Alcoholic Cocktail</option>
                    <option value="biscuits and cookies">Biscuts & Cookies</option>
                    <option value="bread">Bread</option>
                    <option value="cereals">Cereals & Ceral-Like</option>
                    <option value="condiments and sauces">Sauces</option>
                    <option value="desserts">Desserts</option>
                    <option value="drinks">Drinks</option>
                    <option value="egg">Egg-based</option>
                    <option value="ice cream and custard">Ice-cream and Custard</option>
                    <option value="main course">Main Course</option>
                    <option value="pancake">Pancake</option>
                    <option value="pasta">Pasta</option>
                    <option value="pastry">Pastry</option>
                    <option value="pies and tarts">Pies and Tarts</option>
                    <option value="pizza">Pizza</option>
                    <option value="salad">Salad</option>
                    <option value="sandwiches">Sandwiches</option>
                    <option value="seafood">Seafood</option>
                    <option value="side dish">Side Dish</option>
                    <option value="soup">Soup</option>
                    <option value="special occasions">Special Occasions</option>
                    <option value="starter">Starter</option>
                </select>

                <label>Cuisine Types</label>
                <select onChange={props.handleCuisine}
                value={props.cuisineType}>
                    <option value='placeholder'></option>
                    <option value="american">American</option>
                    <option value="asian">Asian</option>
                    <option value="british">British</option>
                    <option value="caribbean">Caribbean</option>
                    <option value="chinese">Chinese</option>
                    <option value="french">French</option>
                    <option value="greek">Greek</option>
                    <option value="indian">Indian</option>
                    <option value="italian">Italian</option>
                    <option value="japanese">Japanese</option>
                    <option value="korean">Korean</option>
                    <option value="mediterranean">Mediterranean</option>
                    <option value="mexican">Mexican</option>
                    <option value="middle eastern">Middle Eastern</option>
                    <option value="nordic">Nordic</option>
                    <option value="south american">South American</option>
                    <option value="south east asian">South East Asian</option>
                </select>

                <button>Submit</button>
            </form>
    )
}

export default AdvancedForm; 