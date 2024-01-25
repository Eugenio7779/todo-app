import React from 'react'
import { FormOutlined } from '@ant-design/icons'
import { DeleteOutlined } from '@ant-design/icons'

export const Tasks = ({task, toggleComplete, deleteTodo, editTodo}) => {
    return(
        <div className='Tasks'>
            <p onClick={() => toggleComplete(task.id)} className={`${task.completed ? 'completed' : ""}`}>{task.task}</p>
            <div>
                <FormOutlined onClick={() => editTodo(task.id)} className='edit-icon'/>
                <DeleteOutlined onClick={() => deleteTodo(task.id)} className='delete-icon'/>
            </div>
        </div>
    )
}