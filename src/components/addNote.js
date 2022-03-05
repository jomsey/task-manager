import React from 'react';
import Icon from './icon';

const AddNote=({handleClose,
               handleDone,
               handleChange,
               content,
               theme
            })=>{
                
        return (
            <div className='add-note'>
                <div className="icons">
                    <Icon iconImage='arrow_back' onIconClick={handleClose}/>
                    <Icon iconImage="check" onIconClick={handleDone}/>
                </div>
                <form onSubmit={handleDone}>
                <input className='color-theme' type="color" value={theme} onChange={handleChange} name="color-theme"/>
                 <textarea className='text-input' name="content" value={content} onChange={handleChange}>Enter text here ...</textarea>
                </form>
            </div>
        );
    
}

export default AddNote;