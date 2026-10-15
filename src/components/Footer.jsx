import React from 'react'

function Footer() {
    return (
        <footer className='absolute text-center bottom-0 w-full h-10'>
            <p className='text-[#ccc]'>
            Copyright © {new Date().getFullYear()}
            </p>
        </footer>
    )
}

export default Footer
