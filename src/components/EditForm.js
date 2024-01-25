import React, {useState} from 'react'

export const EditForm = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task)
    const handleSubmit = e => {
        e.preventDefault();
        editTodo(value, task.id);
        setValue('')
    }
    return (
        <form className='AppForm' onSubmit={handleSubmit}> 
            <input type='text' className='TodoInput' 
            value={value} placeholder='Изменить задачу' onChange={(e) => setValue(e.target.value)}/> 
            <button type='submit' className='TodoBtn'>Изменить</button>
        </form>        
          )
}