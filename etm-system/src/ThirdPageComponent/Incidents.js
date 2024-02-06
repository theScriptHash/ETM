import React from 'react'
import EachFootage from '../SecondPageComponent/EachFootage'
import IncidentDetails from './IncidentDetails'
import incidentImage from '../Media/trafficFire.jpg'

export default function Incidents(props) {
  return (
    <div className='mainDiv'>
       {/* will display only those Footages in Which there are some incident  */}
       <div className='incidentDetails'>
            <EachFootage image={incidentImage} />
            <IncidentDetails/>
       </div>
    </div>
  )
}
