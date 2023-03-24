import React, { useState } from 'react';

export default function Textform(props) {


  const handleClear = () => {
    setText("")
    props.showAlert("Text cleared!", "success")
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(text)
    props.showAlert("Text copied!", "success")
    
  }

  const handleLowerCase = () => {
    let newText = text.toLowerCase()
    setText(newText);
    props.showAlert("Text converted to Lowercase!", "success")

  }



  const handleUpCase = () => {
    let newText = text.toUpperCase()
    setText(newText)
    props.showAlert("Text converted to Uppercase!", "success")
  }
  const handleOnChange = (event) => {
    let newText = event.target.value
    setText(newText)
  }
  const [text, setText] = useState("");
  return (
    <>
      <div className={`form-group my-3 text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
        <label htmlFor="exampleFormControlTextarea1" id="headfont"><h3>{props.heading}</h3></label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}></textarea>
      </div>
      <div className="container" id="buttonTF">
        <button className="btn btn-primary my-2" disabled={text.length === 0} onClick={handleUpCase}>Convert To Uppercase</button>
        <button className="btn btn-primary ml-1 my-2" disabled={text.length === 0} onClick={handleLowerCase}>Convert to Lowercase</button>
        <button className="btn btn-primary" id="copy" disabled={text.length === 0} onClick={handleCopy}>Copy text</button>
        <button className="btn btn-primary" id="clear" disabled={text.length === 0} onClick={handleClear}>Clear text</button>
      </div>
      <div className={`container my-5 text-${props.mode === 'dark' ? 'light' : 'dark'}`} id="wordcount">
        <h2>WORD COUNT</h2>
        <p>NUmber of words: {text.split(/\s+/).filter((element) => { return element.length !== 0 }).length}</p>                <p>Number of letters: {text.length}</p>
        <h3>{0.008 * text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} mins to read</h3>
      </div>
    </>
  );
}
