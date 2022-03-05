import React from 'react';
import Icon from './icon';

const Note = ({themeColor,
             dateCreated,
             content,
             onNoteClick,
             onNoteDelete,
             onNoteEdit,
             bgColor,
           }) => {  

    return (
        <div 
            className='Note'
            style={{backgroundColor:bgColor}}
            onClick={onNoteClick}>

            <div 
                className="color-theme-line"
                style={{backgroundColor:themeColor}}>
            </div>
        

            <div style={{paddingTop:10}} className='icons'>
                  <Icon 
                     iconImage='delete_forever'
                     onIconClick={onNoteDelete}
                   />

                  {/*<Icon
                      iconImage='edit'
                      onIconClick={onNoteEdit}
                  />*/}
            </div>
            <small className='date'>{dateCreated}</small>
            <p className='content'>{content}</p>
            
        </div>
    );
}

export default Note;
