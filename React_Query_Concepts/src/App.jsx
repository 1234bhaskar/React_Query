import React, { useState } from 'react'
import PostsList from './Components/PostsList';
import './App.css'
export default function App() {
  const [toggle,setToggle]=useState(false);
    return (
    <div>
      <header>My Posts</header>
      <div className='toggle'>
      <button  onClick={()=>setToggle(!toggle)}>Toggle</button>
      </div>
        {toggle && <PostsList/>}
    </div>
  )
}
 