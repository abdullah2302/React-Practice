import React, { useState } from 'react'



export default function TextForm(probs) {
  const [text, setText] = useState("Enter text here");
  const [oldWord, setOldWord] = useState("");
  const [newWord, setNewWord] = useState("");

  
  const UpperHandle = () => {
    let textset = text.toUpperCase();
    return setText(textset);
  }
  const LowerHandle = () => {
    let textset = text.toLowerCase();
    return setText(textset);
  }

  const handelOnChange = (event) => {
    console.log("onChange");
    setText(event.target.value);
  }

  const handleReplaceWord = () => {
    if (oldWord && newWord) {

      const regex = new RegExp(`\\b${oldWord}\\b`, 'gi');
      setText(text.replace(regex, newWord));
    }
  }

    const handleClearAll = () => {
      setText("");
      setOldWord("");
      setNewWord("");
  };
  return (
    <>
      <div className='container' my-2>
        <h1>{probs.heading} </h1>
        <div className="mb-3">
          <label for="mybox" className="form-label"></label>
          <textarea className="form-control" id="mybox" onChange={handelOnChange} value={text} rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={UpperHandle}>UpperCase</button>
        <button className="btn btn-primary mx-1" onClick={LowerHandle}>LowerCase</button>
        <button className="btn btn-primary mx-1" onClick={handleClearAll}>Clear All</button>
      </div>
      <div className="container" my-2>
        <h1>Text summary is</h1>
        <p>{text.trim().length} characters</p>
        <p>{text.replace(/\n/g, " ").split(' ').filter(value => value != "").length} words</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
      <div className="container my-2">
        <h1>Find and Replace</h1>
        <div className="mb-3">
          <input type="text" className="form-control my-1" placeholder="Word to find" value={oldWord} onChange={(e) => setOldWord(e.target.value)} />
          <input type="text" className="form-control my-1" placeholder="New word" value={newWord} onChange={(e) => setNewWord(e.target.value)} />
          <button className="btn btn-primary my-1" onClick={handleReplaceWord}>Replace Word</button>
        </div>
      </div>
    </>
  )
}

