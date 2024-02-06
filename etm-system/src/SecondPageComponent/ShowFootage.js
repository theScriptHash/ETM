import React from 'react'
import EachFootage from './EachFootage'
import Button from '../Button'
import image from '../Media/traffic2.jpg'
import { Link } from 'react-router-dom'

export default function ShowFootage() {
  return (
    <div className='mainDivSecondPage'>
      <EachFootage image = {image}/>
      <EachFootage image = {image}/>
      <EachFootage image = {image}/>
      <EachFootage image = {image}/>
      <EachFootage image = {image}/>
      <EachFootage image = {image}/>
      <EachFootage image = {image}/>
      <EachFootage image = {image}/>
      <Link to="/incidents">  <Button content = "Check Incident"/> </Link>
     
    </div>
  )
}
