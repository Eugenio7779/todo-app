import React, {useState} from 'react'
import { AppForm } from './AppForm'
import { v4 as uuidv4} from 'uuid'
import { Tasks } from './Tasks'
uuidv4()

export const Cover = () => {
    const [todos, setTodos] = useState([])
    const addTodo = todo => {
        setTodos([...todos, {id: uuidv4(), task: todo, 
        completed: false, isEditing: false}])
        console.log(todos)
    }
    
    return(
        <div className='Cover'>
            <AppForm addTodo={addTodo} />
            <Tasks />
        </div>
    )
}