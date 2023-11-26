import React from 'react'
import './index.css'

interface Iprops {
  name: string,
  onClick?: any,
  styles: object
}

const CustomButton = (props : Iprops) => {
  const {name, onClick, styles} = props;
  return (
    <div className='button' onClick={onClick} style={styles}>{name}</div>
  )
}

export default CustomButton