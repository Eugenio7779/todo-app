import React, {useState} from 'react'

export const AppForm = ({addTodo}) => {
    const [value, setValue] = useState('')
    const handleSubmit = e => {
        e.preventDefault();
        addTodo(value);
        setValue('')
    }
    return (
        <form className='AppForm' onSubmit={handleSubmit}> 
            <input type='text' className='TodoInput' 
            value={value} placeholder='Что нужно сделать?' onChange={(e) => setValue(e.target.value)}/> 
            <button type='submit' className='TodoBtn'>Добавить</button>
        </form>        
          )
}