import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';

export default function TextForm({ heading, mode }) {
    const handleUpperCase = () => {
        setText(text.toUpperCase())
    }
    const handleLowerCase = () => {
        setText(text.toLowerCase())
    }
    const handleClearText = () => {
        setText("")
    }
    const handleCountWords = () => {
        if (text === "") {
            return 0;
        }
        let words = text.trim().split(/\s+/).length
        return words
    }
    const handleOnChange = (e) => {
        setText(e.target.value)
    }

    const handleCopyText = () => {
        let selectedText = document.getElementById('allText').innerHTML
        navigator.clipboard.writeText(selectedText)
    }

    const handleRemoveSpaces = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
    }

    const [text, setText] = useState("")

    return (
        <div className="container">
                <Form.Label style={{color: mode === 'dark' ? 'white' : 'black'}}><h2>{heading}</h2></Form.Label>
                <Form.Control as="textarea" value={text} placeholder='Enter text here' onChange={handleOnChange} rows={8}  id='allText'/>
                <div className='d-flex justify-content-between'>
                <span style={{color: mode === 'dark' ? 'white' : 'black'}}>Total Words : {handleCountWords()}</span>
                {/* <span>Total Words : {text.split(' ').length}</span> */}
                <span style={{color: mode === 'dark' ? 'white' : 'black'}}>Total Characters : {text.length}</span>
                <span style={{color: mode === 'dark' ? 'white' : 'black'}}>Read Time: {(0.008 * text.split(" ").length).toFixed(2)} Minutes</span>
                </div>
                <div className='d-flex mt-3'>
                <button className="btn btn-primary me-2" onClick={handleUpperCase}>UpperCase</button>
                <button className="btn btn-primary me-2" onClick={handleLowerCase}>LowerCase</button>
                <button className="btn btn-primary me-2" onClick={handleClearText}>Clear</button>
                <button className="btn btn-primary me-2" onClick={handleCopyText}>Copy</button>
                <button className="btn btn-primary me-2" onClick={handleRemoveSpaces}>Remove Extra Spaces</button>
                </div>
        </div>
    );
}