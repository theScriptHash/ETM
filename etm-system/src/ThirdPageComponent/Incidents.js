import React from 'react'
import EachFootage from '../SecondPageComponent/EachFootage'
import IncidentDetails from './IncidentDetails'

export default function Incidents() {
  return (
    <div className='mainDiv'>
       {/* will display only those Footages in Which there are some incident  */}
       <div className='incidentDetails'>
            <EachFootage/>
            <IncidentDetails/>
       </div>
    </div>
  )
}
