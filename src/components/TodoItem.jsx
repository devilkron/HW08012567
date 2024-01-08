import { faCancel, faClose, faEdit, faSave, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"

/* eslint-disable react/prop-types */
function TodoItem(props) {
  const {job,hdlDel, hdlUpdate, hdlStatus} = props
  const [edit,setEdit] = useState(true)
  const [editValue, setEditValue] = useState(job.todo)
  // console.log(edit)


  const hdlChange = (e) =>{
    setEditValue(e.target.value)
  }
  const hdlSave =(id, completed) => {
    setEdit(true)
    hdlUpdate(id, completed, editValue)
  }
  return (
    <div className=" flex gap-2 p-2 transition delay-75 hover:scale-[1.03] rounded-md bg-sky-400 my-2 ">
      
      <input className={`w-full  bg-cyan-100 px-2 mx-2 rounded-md ${edit === true ? 'cursor-pointer' : 'cursor-text'} ${job.completed && edit=== true? 'line-through text-red-600' : 'no-underline text-violet-600'}`} onClick={()=>!edit ? '': hdlStatus(job.id,editValue,job.completed)} value={editValue}  readOnly={edit}
      onChange={hdlChange}/>
      <div className="flex gap-2">
        {edit ? (
          <>

        <button className="p-2 flex items-center gap-2 bg-amber-200 text-blue-400 transition delay-75 rounded-lg hover:bg-indigo-400 hover:text-amber-200" onClick={() => setEdit(false)}>Edit<FontAwesomeIcon icon={faEdit}/></button>
        <button  className="flex items-center gap-2 p-2 bg-amber-200 text-blue-400 transition delay-75 rounded-lg hover:bg-indigo-400 hover:text-amber-200" onClick={()=> hdlDel(job.id)}>Delete<FontAwesomeIcon icon={faTrash}/></button> 
        </>
        ) : (
        <>
        <button  className="flex items-center gap-2 p-2 bg-amber-200 text-blue-400 transition delay-75 rounded-lg hover:bg-indigo-400 hover:text-amber-200" onClick={()=> hdlSave(job.id,job.completed)}>Save <FontAwesomeIcon icon={faSave}/></button>
        <button  className="flex items-center gap-2 p-2 bg-amber-200 text-blue-400 transition delay-75 rounded-lg hover:bg-indigo-400 hover:text-amber-200" onClick={()=> setEdit(true)}>Cancel <FontAwesomeIcon icon={faClose}/></button>
        </>
        

        )}
      </div>
    </div>
  )
}

export default TodoItem