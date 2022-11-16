import { useEffect, useState } from "react"
import NoteModal from "./NoteModal"

import "./Note.css"

function Note(props) {
    const { noteText, onDelete} = props
    const [date, setDate] = useState("")

    useEffect(() => {
      setDate(new Date())
    }, [])
   
  

   return (
     <div className='notes'> 
       <div>{noteText}</div>
       <div className="display-created-date">{date.toLocaleString()}</div>
       <button className="note-delete-button" onClick={() => onDelete(noteText)}>X</button>
       <NoteModal
         title={noteText}
         
         />
     </div>
   )
 
 }
 export default Note
