import React, { useState } from 'react'

const noteDefault = {title:'', content:''}


function AddNote({cb}) {
    const [note, setNote] = useState(noteDefault)

    const handleButtonPress = (e) => {
        e.preventDefault();
        cb({title: note.title, content: note.content})
        setNote(noteDefault)
    }

    return (
        <div className='bg-white rounded-[7px] shadow-[0_2px_5px_#ccc] relative p-2.5 w-80 m-4 '>
        <form>
            <input 
                name='title' 
                placeholder='Title'
                value={note.title}
                onChange={(e) => {setNote({...note, title: e.target.value})}}
                className='cursor-text focus:outline-none'>
            </input>
            <textarea 
                name='content' 
                placeholder='Take a note'
                value={note.content}
                onChange={(e) => {setNote({...note, content: e.target.value})}}
                className='cursor-text focus:outline-none h-12 resize-none'>
            </textarea>
            <button 
                className='w-6 h-6 cursor-pointer absolute bottom-[-12px] right-4 text-white text-[7px] bg-[#f5ba13] rounded-full'
                onClick={handleButtonPress}
            >Add</button>
        </form>
        </div>
    )
}

export default AddNote
