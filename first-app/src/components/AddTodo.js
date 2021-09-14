import React, {useState} from 'react'
import PropTypes from 'prop-types'

const AddTodo = props => {
    const [title, setTitle] = useState('')

    const changeTitle = event => {
        console.log(event.target.value);
    }

    return (
        <form>
            <input
            type='text'
            name='title'
            placeholder='Add new'
            onChange={changeTitle}
            />
            
            <input type='submit' value='Add' />
        </form>
    )
}

AddTodo.propTypes = {}

export default AddTodo