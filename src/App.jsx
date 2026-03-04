import './App.css'
import Header from './Header'
import Footer from './Footer'
import Note from './Note'; 
import CreateNote from './CreateNote';
import { useState } from 'react';

function App() {
  // Keep track of all the notes
  const [notebook, setNotebook] = useState([]); 

  // Create a method to update the notebook array. 
  const addNote = (newNote) => {  
    setNotebook(prevNotes => {
        return [...prevNotes, newNote]; 
    })
  }

  // Create a method to delete a note
  const deleteNote = id => {
    setNotebook(prevNotes => {
      return prevNotes.filter((note, index) => {
        return index != id; 
      }); 
    }); 
  }

  return (
    <>
      <Header />
      <main>
        <CreateNote onAdd={addNote}/>
        <section>
          {notebook.map((note, index) => (
            <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            onDelete={deleteNote}
            />
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App