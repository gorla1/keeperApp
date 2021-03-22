import React from "react"

import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes"

function App(){
    return(
    <div>
    <Header />
    {notes.map(newNote=>(<Note key={newNote.key} title={newNote.title}  content={newNote.content}/>))}
    <Footer />
    </div>
    )
}

export default App;

//2. Create a App.jsx component.

//5. Create a Note.jsx component to show a <div> element with a
//<h1> for a title and a <p> for the content.