import { useState } from 'react'
import victoriaFalls from './assets/victoriaFalls.png'
import heroImg from './assets/hero.png'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
 

  return (
    <>
      <h1>Exploring Natural Wonders</h1>
      <p>Discover the awe-inspiring beauty of natural landscapes across the globe, from the <strong>Victoria Falls</strong> in Zimbabwe to the captivating <strong>Aurora Borealis</strong> visible in various countries.</p>
      <h1>Natural Wonders</h1>
      <ol>
        <li>Victoria Falls, Zimbabwe</li>
        <li>Grand Canyon, USA</li>
        <li>Aurora Borealis, Various Countries</li>
        <li>Mount Everest, Nepal</li>
        <li>Great Barrier Reef, Australia</li>
      </ol>
        <q>Nature always wears the colors of the spirit.</q><cite>Ralph Waldo Emerson</cite>
        <h1>Benefits of Experiencing Natural Beauty</h1>
        <ul>
          <li>Fostering a sense of wonder</li>
          <li>Deepening appreciation for the planet</li>
          <li>Creating lasting memories</li>
        </ul>
        <h1>Discover More</h1>

        <img src={victoriaFalls} alt="victoriaFalls" title="Victoria Falls" width= "700" height="500" />
        <p>The Majestic Victoria Falls</p>
        <a href="#">Explore more natural wonders.</a>
        <h1>Beautiful Places in Pakistan</h1>
         <img src="https://wander-lush.org/wp-content/uploads/2020/01/Beautiful-places-in-Pakistan-Hingol-National-Park-LukasBischoffGetty-CanvaPro.jpg" alt="Image2" title="Beauty of Pakistan" width="700" height="500"/>
       
    </>
  )
}

export default App
