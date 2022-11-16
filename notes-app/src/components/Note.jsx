import { useEffect, useState } from "react"
import NoteModal from "./NoteModal"
import "./Note.css"

function Note(props) {
    const { noteTitle, onDeleteNoteHandler} = props
    const [date, setDate] = useState("")

    useEffect(() => {
      setDate(new Date())
    }, [])
   
   
   return (
     <div className='notes'> 
       <div>{noteTitle}</div>
       <div className="display-created-date">{date.toLocaleString()}</div>
       <button className="note-delete-button" onClick={() => onDeleteNoteHandler(noteTitle)}>X</button>
       <NoteModal
         title={noteTitle}
         />
     </div>
   )
 
 }
 export default Note
