import React from 'react'
import '../../Styles/Main/Main.css'
import Searchbar from '../Search Bar/Searchbar'
import Explore from '../../Pages/Explore/Explore'

function Main() {
  return (
    <div className='main'>
      <Searchbar/>
      <Explore/>
    </div>
  )
}

export default Main