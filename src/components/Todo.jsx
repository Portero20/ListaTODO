import React from 'react'
import { useState } from 'react'

const Todo = ({prod,onUpdate,onDelete}) => {

const [isEdit,setIsEdit] = useState(false)


const FormEdit = () => {

    const [newValue,setNewValue] = useState(prod.title)

    const handleSubmit = (e) =>{

        e.preventDefault();

    }

    const handleChange = (e) =>{

        const value = e.target.value;
        setNewValue(value);

    }

    const handleClickUpdateTodo = () => {

    
        onUpdate(prod.id,newValue)
        setIsEdit(false)
    
        
    
    }

    return( <form className='todoUpdateForm' onSubmit={handleSubmit}>

        <input type="text" className='todoInput' onChange={handleChange} value={newValue}></input>
        <button className='button' onClick={handleClickUpdateTodo}>Update</button>

    </form>)

}

const TodoElement = () =>{

    return( <div className='todoInfo'>

        <span className='todoTitle'>{prod.title}</span>

        <button onClick={()=> setIsEdit(true)} className="button">Editar</button>
        <button onClick={() => onDelete(prod.id)} className="buttonDelete">Delete</button>

    </div>
    );

}


return (

<>

    <div className='todo'>

        {
        isEdit ? <FormEdit/> : <TodoElement />
        }

    </div>





</>
)
}

export default Todo