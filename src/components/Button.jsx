import React from 'react'
import './Button.css'

function Button(props) {
    
    const itsOperation = value => {
        return isNaN(value) && (value != '.') /* &&  (value != '=') */
    };

  return (
    <div className={`button-container ${itsOperation(props.children) ? 'operation' : null}`.trimEnd()}
    onClick={()=> props.beenClicked(props.children)}>  
      {props.children}
    </div>
  )
}

export default Button
