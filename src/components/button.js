import React from 'react';

const Button = ({name,icon,bgColor,onBtnClick}) => {
    return (
        <div 
            className='button'
            onClick={onBtnClick}
            style={{backgroundColor:bgColor}} >

           <i className="material-icons">{icon}</i>

            <p>{name}</p>
        </div>
    );
}

export default Button;
