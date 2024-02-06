import React from 'react'
import currentLocation from '../Media/currentLocation.jpeg'
import MapBox from './MapBox'

export default function CurrLocation() {
  return (
    <div>
      <div className='myLocation'>
        <img src={currentLocation} alt="myLocation"/>
        {/* <MapBox/> */}
      </div>
    </div>
  )
}
