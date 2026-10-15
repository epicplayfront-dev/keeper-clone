import React from 'react'
import Note from './Note'
import notes from '../notes'

function NotesArea() {
  return (
    <div>
        {notes.map((note) => (
            <Note key={note.key} title={note.title} content={note.content} />
        ))}
    </div>
  )
}

export default NotesArea
