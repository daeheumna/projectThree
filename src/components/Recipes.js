import { useState, useEffect } from 'react';

import axios from 'axios';

import Form from './Form';
import RecipeGallery from './RecipeGallery';

const Recipes = () => {

    const [ ingredientInput, setingredientInput ] = useState('')
    const [ recipes, setRecipes] = useState([]);
    const [ apiError, setApiError ] = useState(false);

    const [ mealType, setMealType ] = useState('breakfast')


    // useEffect( () => {
    //     axios({
    //         url: 'https://api.edamam.com/api/recipes/v2',
    //         params: {
    //             type: 'public',
    //             app_id: '37457af6',
    //             app_key: '4e5b5013620e0769c87783ec9aef2ca3',
    //             q: ingredientInput
    //         }

    //     }).then( (apiData) => {
    //         // console.log(apiData.data.hits);
    //         setRecipes(apiData.data.hits);
           
    //     })
    // }, [ingredientInput])


    // On change event handler
    const handleChange = (e) => {
        // console.log(e.target.value)
        setingredientInput(e.target.value)
        
    }
   
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        // console.log(ingredientInput)
        // console.log(recipes)
        fetchData();
    }

    const fetchData = () => {

        // construct our URL
        const url = new URL('https://api.edamam.com/api/recipes/v2');
        url.search = new URLSearchParams({
            type: 'any',
            app_id: '37457af6',
            app_key: '4e5b5013620e0769c87783ec9aef2ca3',
            random: true,
            q: ingredientInput,
            // cuisineType: 'world',
            // dishType:
            
        })

        // async request (it will return a Promise)
        fetch(url)
            .then((result) => {
                if (result.ok){
                return result.json();
                } else {
                    throw new Error('This call was not successful');
                }
            })
            .then((apiData) => {
                // console.log(apiData.hits);
                setRecipes(apiData.hits);
                console.log(apiData.hits)
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
            

            <RecipeGallery 
            recipes={recipes}/>
        </main>
    )
}

export default Recipes;
