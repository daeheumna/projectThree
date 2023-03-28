import { useState } from 'react';
import { Link } from 'react-router-dom';

// import axios from 'axios';

import Form from './Form';
import RecipeGallery from './RecipeGallery';

const Recipes = () => {

    const [ ingredientInput, setingredientInput ] = useState('')
    const [ recipes, setRecipes] = useState([]);
    const [ apiError, setApiError ] = useState(false);

    // const [ mealType, setMealType ] = useState('breakfast')

    const handleChange = (e) => {
        setingredientInput(e.target.value)
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
            q: ingredientInput
            // cuisineType: 'world',
            // dishType:
            
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
                setApiError(false)
            })
            .catch((err) => {
                setApiError(true);

            })
    }


    return (
        <main>

            <Form 
            handleChange={handleChange} 
            typedValue={ingredientInput}
            handleSubmit={ handleSubmit}/>
            
            <Link to='/advancedSearch'>
                <p className='searchOption'>Advanced Search</p>
            </Link>

            <RecipeGallery 
            recipes={recipes}/>
            
        </main>
    )
}

export default Recipes;
