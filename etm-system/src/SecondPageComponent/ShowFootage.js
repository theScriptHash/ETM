import React from 'react'
import EachFootage from './EachFootage'
import Button from '../Button'
import image from '../Media/traffic2.jpg'

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
      <Button content = "Check Incident"/>
    </div>
  )
}
