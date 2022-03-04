import React from 'react'

export default function Icon({iconImage,onIconClick,iconColor}) {
  return (
    <div 
        className='icon'
        onClick={onIconClick}
        style={{backgroundColor:iconColor}}>

       <i className="material-icons">{iconImage}</i>
    </div>
  )
}
