import {useState} from 'react'

const Form = (props) => {

    const [formState, setFormState] = useState({
        searchterm: '',
    })

    const handleChange = (event) => {
        setFormState({searchterm: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.generateGif(formState.searchterm)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' name="searchterm" onChange={handleChange} value={formState.searchterm} placeholder='generateGif' />
                <input type='submit' value='search' />
            </form>
        </div>
    )
}

export default Form