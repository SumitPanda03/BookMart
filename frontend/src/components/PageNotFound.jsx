import React from 'react'
import svg from '../assets/404.svg'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <>
            <div className="cont-404 h-100vh flex flex-col items-center justify-center">
                <img className="h-70vh w-50vw" src={svg} alt="svg" />
                <Link to={'/'} >
                <button className='px-3 py-4 bg-purple-300 border-none cursor-pointer rounded-xl transition-0.3s hover:bg-purple-400'>Back to Home</button>
                </Link>
            </div>
        </>
  )
}

export default PageNotFound