import React from 'react'
import './index.css'

interface Iprops {
    children: JSX.Element
}

const ToolBox = (props : Iprops) => {
  return (
    <div className='tool-box'>
        {props.children}
    </div>
  )
}

export default ToolBox