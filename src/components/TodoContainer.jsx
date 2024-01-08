/* eslint-disable react/prop-types */
import TodoItem from "./TodoItem"

function TodoContainer(props) {
  const {todos,hdlDel, hdlUpdate, hdlStatus} = props
  return (
    <div className="todo-container">
    { todos.map( el=> (
      <TodoItem key={el.id} job={el} hdlDel={hdlDel} hdlUpdate={hdlUpdate} hdlStatus={hdlStatus}/>
    ))   
    }  
    <p className="text-center text-indigo-800 ">SNRU Chalongrach Phukhongnak </p>
    
    </div>
  )
}

export default TodoContainer