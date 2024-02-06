import React from 'react'
import CurrLocation from './FirstPageComponent/CurrLocation'
import Searchbar from './FirstPageComponent/Searchbar'
import Button from './Button'
import './App.css';
import ShowFootage from './SecondPageComponent/ShowFootage';
import Incidents from './ThirdPageComponent/Incidents';
import image from './Media/traffic2.jpg';

export default function App() {
  return (
    <> 
    <div className='mainDiv'>
      <h2>EcoSync Traffic Management</h2>
      <CurrLocation/> 
      <h2>Select Area :</h2>
      <Searchbar/>
      <Button content = "Check Status"/>
    </div>
    <ShowFootage/>
    <Incidents image = {image}/>

    </>

  )
}
