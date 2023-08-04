import { useEffect, useState } from 'react'
import './App.css'
import NoteContainer from './Componenets/NoteContainer/NoteContainer'
import Sidbar from './Componenets/Sidbar/Sidbar'

function App(  ) {
 
const[ notes ,setNotes] =useState(
  JSON.parse(localStorage.getItem("notes-app")) ||
  [])

const addNote =(color)=>{
 const tempNotes =[...notes]

 tempNotes.push({
  id: Date.now()+""+Math.floor(Math.random()*78),
  text:"",
  time: Date.now(),
  color,
 })
 setNotes(tempNotes)

}   


// console.log(tempNotes.text.value);


const deletNote=(id)=>{
  const tempNotes =[...notes]


  const indeex = tempNotes.findIndex((item)=> item.id === id)
    if (indeex < 0)return

    tempNotes.splice(indeex, 1)
    setNotes(tempNotes)

}

const updateText = (text, id) => {
  const tempNotes = [...notes];

  const index = tempNotes.findIndex((item) => item.id === id);
  if (index < 0) return;

  tempNotes[index].text = text;
  setNotes(tempNotes);
};


useEffect(()=>{
  localStorage.setItem("notes-app",JSON.stringify(notes))
},[notes])

  return ( 
    <>  
    <div  className="App" >
      <Sidbar addNote={addNote} /> 
      <NoteContainer notes={notes}  deletNote={deletNote}   updateText={updateText}/>

    </div>
    </>
  )
}

export default App
