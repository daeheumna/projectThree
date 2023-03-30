import { useState } from 'react';
import { Link } from 'react-router-dom';

import Form from './Form';
import RecipeGallery from './RecipeGallery';

const Recipes = () => {

    const [ ingredientInput, setingredientInput ] = useState('')
    const [ recipes, setRecipes] = useState([]);

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
            app_id: process.env.REACT_APP_API_ID,
            app_key: process.env.REACT_APP_API_KEY,
            random: true,
            q: ingredientInput
        })

        fetch(url)
            .then((result) => {
                if (result.ok){
                    return result.json();
                } else {
                    throw new Error(result.statusText);
                }
            })
            .then((apiData) => {
                setRecipes(apiData.hits);

                if (!apiData.hits[0]){
                    throw new Error()
                }
            })
            .catch((err) => {
                console.log(err.message)
                alert("We couldn't find any recipes with that combination... Please try something else!")

            })
    }


    return (
        <main>
            <Form 
            handleChange={handleChange} 
            typedValue={ingredientInput}
            handleSubmit={ handleSubmit}/>
            
            <Link to='/advancedSearch' className='searchOption'>Advanced Search</Link>

            <RecipeGallery 
            recipes={recipes}/>
        </main>
    )
}

export default Recipes;
