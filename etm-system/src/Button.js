import React, { useState } from 'react'
import ShowFootage from './SecondPageComponent/ShowFootage'

export default function Button(props) {
  const [showComponent, setShowComponent] = useState(false);

  const handleClick = () => {
    setShowComponent(true);
  };

  return (
    <div>
      <button className='btn' onClick={handleClick}>
        {/* <a href="/">
          
        </a> */}
        {props.content}
        </button>
        {/* {showComponent && <ShowFootage />} */}
    </div>
  )
}
