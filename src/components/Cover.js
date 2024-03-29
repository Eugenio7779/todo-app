import React, {useState} from 'react'
import { AppForm } from './AppForm'
import { v4 as uuidv4} from 'uuid'
import { Tasks } from './Tasks'
import { EditForm } from './EditForm'
uuidv4()

export const Cover = () => {
    const [todos, setTodos] = useState([])
    const addTodo = todo => {
        setTodos([...todos, {id: uuidv4(), task: todo, 
        completed: false, isEditing: false}])
        console.log(todos)
    }
        const toggleComplete = id => {
            setTodos(todos.map(todo => todo.id === id ? {...
            todo, completed: !todo.completed} : todo ))            
        }        
        const deleteTodo = id => {
            setTodos(todos.filter(todo => todo.id !== id))
        }
        const editTodo = id => {
            setTodos(todos.map(todo => todo.id === id ? {...
                todo, isEditing: !todo.isEditing} : todo))
        }
        const editTask = (task, id) => {
            setTodos(todos.map(todo => todo.id === id ? {
                todo, task, isEditing: !todo.isEditing} : todo))
        }
    return(
        <div className='Cover'>
            <h1>Список задач</h1>
            <AppForm addTodo={addTodo} />
            {todos.map((todo, index) => (
                todo.isEditing ? (
                    <EditForm editTodo={editTask} task={todo} />
                ) : (
                    <Tasks task={todo} key={index} 
                toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo}/> 

                )
                               
            ))}
        </div>
    )
}