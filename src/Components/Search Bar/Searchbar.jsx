import React from 'react'
import { CiSearch } from "react-icons/ci";
import '../../Styles/Searchbar/Searchbar.css'

function Searchbar() {
  return (
    <div className="searchbar">
        <input type="text" name="" id="" placeholder='Search...'/>
        <CiSearch fontSize={25} cursor={'pointer'}/>
    </div>
  )
}

export default Searchbar