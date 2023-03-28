const Form = (props) => {
    return (
        <>
            <form onSubmit={props.handleSubmit}>
                <label htmlFor='ingredients'></label>
                <input type='text' id='ingredients' onChange={props.handleChange} value={props.typedValue} required></input>

                <button>Submit</button>
            </form>
        </>
    )
}

export default Form; 