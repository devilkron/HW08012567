/* eslint-disable react/prop-types */
import { faSquare } from "@fortawesome/free-regular-svg-icons"
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"

function FormAddTodo(props) {
  const {hdlAdd} = props
  const [input, setInput] = useState('')

  const hdlSubmit = (e) => {
    e.preventDefault()  
    let newJob = { todo: input, completed: false, user: 1 }

    input === '' ? alert('Enter something to do ') : hdlAdd(newJob)
    
  }

  return (
    <form className="flex gap-2 p-2 bg-blue-400 border-2 rounded-md my-2" onSubmit={hdlSubmit}>
      <input className="bg-cyan-100 w-full grow px-5 h-10 rounded-md" placeholder="Enter what to do" value={input} onChange={e=>setInput(e.target.value)} />
      <button className="flex items-center gap-2 bg-amber-200 px-5 text-blue-400 hover:bg-indigo-400 hover:text-amber-200 transition delay-75 rounded-full" type="submit">Add <FontAwesomeIcon icon={faSquarePlus}/></button>
    </form>
  )
}

export default FormAddTodo