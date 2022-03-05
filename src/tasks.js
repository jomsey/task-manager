import React, { Component } from 'react'
import Button from './components/button'
import Note from './components/note'
import AddNote from './components/addNote'
import colors from './components/colors';


export default class Tasks
 extends Component {

  state={
    notes:[],
    noteContent:'',//input from textarea
    theme:'#ffffff',//input from color picker
    isVisible:false,//toggle visibility of AddNotes component
    height:100//note component height
  }
  
  handleCreateNote=()=>{
    /*toggle visibility of AddNote component*/
    const isVisible=true
    this.setState({isVisible})
  }

  handleNoteEdit=note=>{
/********************************************************************************************/
/********************************************************************************************/
/********************************************************************************************/
 this.handleCreateNote()  //open Note for editting

 fetch(`https://jose-taskmanager-api.herokuapp.com/api/notes/${note.id}`, {
      method: "PUT",
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(note)
  })

    this.setState({noteContent:note.content,theme:note.theme_color}) //add note to the textarea
    this.getNotesData() //rerender notes  after  updating

  /********************************************************************************************/
  /********************************************************************************************/
  /********************************************************************************************/
  }

   handleNoteDelete=async (note)=>{
    await fetch(`https://jose-taskmanager-api.herokuapp.com/api/notes/delete/${note.id}`, {
      method: "DELETE",
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(note)
  })
    this.getNotesData() //rerender notes  after deleting
  }

  handleAddNoteClose=()=>{
    const isVisible = false
    this.componentDidMount() //rerender Notes components after adding a new one
    this.setState({isVisible})
  }

  handleNoteSubmit=e=>{
  // Add note to the database
    const data = {content:this.state.noteContent,theme_color:this.state.theme}
    fetch('https://jose-taskmanager-api.herokuapp.com/api/notes', {
      method: "POST",
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)

  })
     this.getNotesData() //rerender notes  after adding a new note
  }

  handleSubmitChange=e=>{
  if( e.target.name ==='content') this.setState({noteContent:e.target.value});
  if( e.target.name ==='color-theme') this.setState({theme:e.target.value});
  
  }

  getNotesData= async () => {
       const response = await fetch('/api/notes')
       const notes= await response.json()
       return this.setState({notes})
  }
   
  componentDidMount=  () =>{
        this.getNotesData()
  }

  getNotes=()=>{

    return this.state.notes.map(note=>

      <Note 
                 key={note.id}
                 bgColor={colors.primary}
                 themeColor={note.theme_color}
                 content= {note.content}
                 dateCreated={(note.date_created).slice(0,10)}
                 onNoteEdit={()=>this.handleNoteEdit(note)}
                 onNoteDelete={()=>this.handleNoteDelete(note)}
                 onNoteClose={()=>this.handleNoteClose(note)}
       />)

  }

  render() {
        const {isVisible,noteContent,theme} = this.state
        return (
                <div className='tasks-container'>

                   {!isVisible && 
                       <Button
                           name="Create a note" 
                           bgColor={colors.tertiary} 
                           icon='add' 
                           onBtnClick={this.handleCreateNote}
                        />}

                   {isVisible && 
                    
                        <AddNote
                            handleClose={this.handleAddNoteClose}
                            handleDone={this.handleNoteSubmit}
                            handleChange={this.handleSubmitChange}
                            content={noteContent}
                            theme={theme}
                        />}

                 {this.state.notes.length === 0?<p style={{textAlign:'center'}}>No notes to display</p>:this.getNotes()}
               </div>
    )
  }
}
