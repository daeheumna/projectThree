import { useState } from 'react';
import AdvancedForm from './AdvancedForm';
import RecipeGallery from './RecipeGallery';

import { Link } from 'react-router-dom';

const AdvancedSearch = () => {

    const [ ingredientInput, setingredientInput ] = useState('')
    
    const [ recipes, setRecipes] = useState([]);
    const [ mealType, setMealType ] = useState(null);
    const [ diet, setDiet ] = useState([]);
    const [ dishType, setDishType ] = useState(null);
    const [ cuisineType, setCuisineType ] = useState(['']);
    const [ healthLabel, setHealthLabel ] = useState(['']);
  

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

    const handleHealth = (e) => {
        setHealthLabel(e.target.value);
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
            cuisineType: cuisineType,
            health: healthLabel  
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
            }).catch(() => {
          
                alert("We couldn't find any recipes with that combination... Please try something else!")

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
            handleHealth = { handleHealth }
            />

            <Link to='/' className='searchOption'>Basic Search</Link>
            
            <RecipeGallery
            recipes={recipes}/>
            </section>
        </main>
    )
}


export default AdvancedSearch;