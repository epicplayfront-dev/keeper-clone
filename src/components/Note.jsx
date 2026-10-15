import React from 'react'

function Note() {
    return (
        <div className='bg-white rounded-[7px] shadow-[0_2px_5px_#ccc] p-2.5 w-60 m-4 fl float-left'>
            <h1 className='text-[1.1em] mb-1.5'>Title</h1>
            <p className='text-[1.1em] mb-2.5 whitespace-pre-wrap wrap-break-word'>Content</p>  
        </div>
    )
}

export default Note
