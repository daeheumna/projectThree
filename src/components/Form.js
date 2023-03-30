const Form = (props) => {
    return (
            <form onSubmit={props.handleSubmit} className='basicForm'>
                <label htmlFor='ingredients' className="sr-only">Ingredients</label>
                <input type='text' id='ingredients' onChange={props.handleChange} value={props.typedValue} required placeholder="ingredients (e.g. chicken, broccoli...)"></input>

                <button>Submit</button>
            </form>
    )
}

export default Form; 