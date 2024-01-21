import React from 'react'
import { FormOutlined } from '@ant-design/icons'
import { DeleteOutlined } from '@ant-design/icons'

export const Tasks = () => {
    return(
        <div className='Tasks'>
            <p>Нужно сделать</p>
            <div>
                <FormOutlined />
                <DeleteOutlined />
            </div>
        </div>
    )
}