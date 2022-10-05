import React from 'react'
import { useState } from 'react'

const Todo = ({prod,onUpdate,onDelete}) => {

//Estado para editar
const [isEdit,setIsEdit] = useState(false)

//Función FormEdit
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

//Función TodoElement
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
        isEdit ? <FormEdit/> : <TodoElement /> //si es true me mostrara para actualizar la tarea y si no me mostrara para editarla o eliminarla 
        }

    </div>





</>
)
}

export default Todo