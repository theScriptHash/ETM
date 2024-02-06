import React from 'react'
import CurrLocation from './CurrLocation'
import Searchbar from './Searchbar'
import Button from '../Button'
import { Link } from 'react-router-dom'

export default function MainBody() {
  return (
    <>
     <div className='mainDiv'>
      <h2>EcoSync Traffic Management</h2>
      <CurrLocation/> 
      <h2>Select Area :</h2>
      <Searchbar/>
      
      <Link to="/showFootage"> <Button content = "Check Status"/> </Link>
    </div>
    </>
  )
}
