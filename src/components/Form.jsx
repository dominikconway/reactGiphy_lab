import {useState} from 'react'

const Form = (props) => {

    const [formState, setFormState] = useState({
        
    })

    return (
        <div>
            <form>
                <input type='submit' value='search' />
            </form>
        </div>
    )
}

export default Form