import logo from './logo.svg';
import { useState, useEffect } from 'react'
import Note from './components/Note';
import React from "react";
import './App.css';


function App() {
  const [text, setText] = useState("")
  const [notes, setNotes] = useState([])
 
  function handleTextOnChange(e) {
    setText(e.target.value)
    
  }

  function addNoteOnClick(e) {
    e.preventDefault();
     setNotes([...notes, {text, id: notes.length}])
     setText("")
  }
 

  const isEmptyNotes = notes.length === 0
  
  const onDeleteNote = (index) => {
    const confirmMessage = window.confirm("Are you sure you want to delete your note?")
    if (confirmMessage == true) {
       setNotes(notes.filter(noteItem => noteItem.id !== index))
    }
  }

  return (
    <>
     <div className='container'>
     <h2 className='title'>Add Your Notes Here</h2>

     <form className='form-note'>
       <input className="form-note "type="text" onChange={handleTextOnChange} placeholder="your notes here..."></input>
       <button onClick={addNoteOnClick}>Add Note</button>
     </form>
     </div>
     <div className='notes-container'>
      <div> 
      { isEmptyNotes ? <div> No Notes Added </div> :
      notes.map((note) => 
      <Note
       key={note.id}
       noteText={note.text} 
       onDelete={() => onDeleteNote(note.id)}
       />
      )}
     </div>
      </div>
    
    </>
   
  );
}



export default App;
