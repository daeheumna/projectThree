import { useState } from 'react';
import AdvancedForm from './AdvancedForm';
import RecipeGallery from './RecipeGallery';

import { Link } from 'react-router-dom';

const AdvancedSearch = () => {

    const [ ingredientInput, setingredientInput ] = useState('')
    
    const [ recipes, setRecipes] = useState([]);
    const [ mealType, setMealType ] = useState(null);
    const [ diet, setDiet ] = useState(null);
    const [ dishType, setDishType ] = useState(null);
    const [ cuisineType, setCuisineType ] = useState(null);
  

    const handleChange = (e) => {
        setingredientInput(e.target.value);
    }

    const handleMealType = (e) => {
        setMealType(e.target.value);
    }

    const handleDiet = (e) => {
        setDiet(e.target.value);
    }

    const handleDishType = (e) => {
        setDishType(e.target.value);
    }

    const handleCuisine = (e) => {
        setCuisineType(e.target.value);
    }
   
    const handleSubmit = (e) => {
        e.preventDefault();
        fetchData();
    }

    const fetchData = () => {
        const url = new URL('https://api.edamam.com/api/recipes/v2');
        url.search = new URLSearchParams({
            type: 'any',
            app_id: '37457af6',
            app_key: '4e5b5013620e0769c87783ec9aef2ca3',
            random: true,
            q: ingredientInput,
            mealType: mealType,
            diet: diet,
            dishType: dishType,
            cuisineType: cuisineType  
        })

        fetch(url)
            .then((result) => {
                if (result.ok){
                return result.json();
                } else {
                    throw new Error('This call was not successful');
                }
            })
            .then((apiData) => {
                setRecipes(apiData.hits);
               
            })
            
    }


    return (
        <main>
            <section className='advancedSearch'>
            <AdvancedForm 
            handleChange={handleChange}
            handleMealType = {handleMealType} 
            typedValue={ingredientInput}
            handleSubmit={ handleSubmit}
            handleDiet = { handleDiet}
            handleDishType = { handleDishType}
            handleCuisine = { handleCuisine}
            />

            <Link to='/'>
                <p className='searchOption'>Basic Search</p>
            </Link>
            
            <RecipeGallery
            recipes={recipes}/>
            </section>
        </main>
    )
}


export default AdvancedSearch;