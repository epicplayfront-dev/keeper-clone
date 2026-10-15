import Note from './Note'
import notes from '../notes'
import AddNote from './AddNote'
import { useState } from 'react'

function NotesArea() {
  
  const [notesDisp, setNotesDisp] = useState(notes);

  const addNote = (note) => {
    const {title, content} = note
    const key = notesDisp.length + 1;
    setNotesDisp([...notesDisp, {
      key: key,
      title: title,
      content: content,
    }])
  };


  return (
    <div className='flex flex-col items-center'>
      <AddNote cb={addNote}/>
      <div className='grid grid-cols-4'>
        {notesDisp.map((note) => (
            <Note key={note.key} title={note.title} content={note.content} />
        ))}
      </div>
    </div>
  )
}

export default NotesArea
