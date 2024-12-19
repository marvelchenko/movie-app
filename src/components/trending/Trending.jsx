import React, { useState } from 'react'
import Home from '../homes/Home'
import {trending} from "../../DummyData";
import './Trending.css'

const Trending = () => {
    const [items, setItems] = useState( trending)
  return (
    <>
    <section className="trending text-white">
        <h3 className='font-semibold ml-14'>Trending</h3>
        <Home items={items} />
    </section>
    </>
  )
}

export default Trending
