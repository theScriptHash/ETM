import React from 'react'

export default function Button(props) {
  return (
    <div>
      <button className='btn'>{props.content}</button>
    </div>
  )
}
