import React from 'react'
import { FaPlay } from 'react-icons/fa'

const Ucard = ( { item: { id, cover, name, time }}) => {
  return (
    <>
    <div className="MovieBox">
      <div className="img">
        <img src={cover} alt="" />
      </div>
      <div className='text'>
        <h3>{name}</h3>
        <span > {time} </span>
        <button className="mt-4 flex gap-2 items-center text-white primary-btn bg-red-500 rounded-md px-4 py-2">
        <FaPlay /> PLAY NOW
        </button>
      </div>
    </div>
    </>
  )
}

export default Ucard
