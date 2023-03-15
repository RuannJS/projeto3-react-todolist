import React, { useState } from 'react'


function CreateForm(props) {


    const [text, setText] = useState("")

    function handleChange(event) {
        let input = event.target.value
        setText(input)
    }

    function addItem(event) {
        event.preventDefault()
        if (text) {
            props.onAddItem(text)
            setText("")
        }
    }

    return (
        <form className='form'>
            <input className='formInput' onChange={handleChange} type="text" value={text}></input>
            <br></br>
            <button className='formButton' onClick={addItem}>Add Task</button>
        </form>
    )
}

export default CreateForm