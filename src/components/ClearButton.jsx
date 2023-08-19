import React from 'react'
import './ClearButton.css'

const ClearButton = (props) => {
  return (
    <div className='clear-button' onClick={props.letsClear}>
      {props.children}
    </div>
  )
}

export default ClearButton
