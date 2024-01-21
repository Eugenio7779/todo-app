import React from 'react'
export const AppForm = () => {
    return(
        <form className='AppForm'>
            <input type='text' className='TodoInput' 
            placeholder='Что нужно сделать?'/>
            <button type='submit' className='TodoBtn'>Добавить</button>
        </form>        
          )
}