import React from 'react'
import { useState } from 'react'
import Todo from './Todo';
import "./TodoApp.css"
import 'animate.css';


const todoApp = () => {

const [title,setTitle] = useState("TODO")
const [todos,setTodos] = useState([]);


//Función para cada vez que yo escriba algo se me actualice el estado
const handleChange = (e) =>{

    const value = e.target.value

    setTitle(value)

}


//Función para prevenir el evento y agregar el objeto con sus respectivos datos
const handleSubmit = (e) =>{

    e.preventDefault();
    
    const newTodo = {
        id:crypto.randomUUID(), //para generar un id aleatorio
        title: title,
        completed: false 
    }

    setTodos([...todos,newTodo]); //agregame todo lo que ya hay pero agregame newTodo

    setTitle(""); //para que me elimine el texto cuando cambie el estado
}

const handleUpdate = (id,value) =>{ //recibe los parametros del hijo

    const temp = [...todos] //sacamos las copias de los todos
    const item = temp.find(item => item.id == id); //buscamos el elemento item en donde el elemento sea item.id == al id que yo tengo en mi funcion
    item.title = value; //si lo encuentra va a ser igual al nuevo valor
    setTodos(temp); //lo seteamos

}

//Función para eliminar una tarea
const handleDelete = (id) =>{ //pasamos de hijo hacia padre

    const temp = todos.filter(item => item.id != id) //le ponemos distinto para que me lo elimine
    setTodos(temp)


}

return (
<div className='todoContainer animate__animated animate__fadeIn'>

    <h2>TODO APP</h2>

    <form className='todoCreateForm' onSubmit={handleSubmit}>
        <input onChange={handleChange} className='todoInput' type="text" value={title} />
        <input onClick={handleSubmit} type="submit" className='buttonCreate' value="Create Todo" />


    </form>

    <div className='todosContainer'>

        {
            todos.map((prod) =>{

                return(
                    <Todo key={prod.id} prod={prod} onUpdate={handleUpdate} onDelete={handleDelete} />
                )

                
            })
        }

    </div>

</div>
)
}

export default todoApp