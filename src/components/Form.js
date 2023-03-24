import { useState } from 'react';

const Form = (props) => {
    return (
        <>
            <h2>Random Recipe Generator</h2>

            <form onSubmit={props.handleSubmit}>
                <label htmlFor='ingredients'></label>
                <input type='text' id='ingredients' onChange={props.handleChange} value={props.typedValue}></input>

                <label>Meal Type</label>
                <select>
                    <option value=''></option>
                    <option value="">Breakfast</option>
                    <option value="">Lunch</option>
                    <option value="">Dinner</option>
                    <option value="">Snack</option>
                    <option value="">Teatime</option>
                </select>

                <button>Submit</button>
            </form>
        </>
    )
}

export default Form; 