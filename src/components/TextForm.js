// import { configure } from '@testing-library/react';
import React, {useState} from 'react'


export default function TextForm(props) {

    const handleUpClick = ()=>{
        // console.log("Uppercase Was Clicked " + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLowClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleDownloadText = () => {
        const bl = new Blob([text], { type: 'text/plain' });
        const u = URL.createObjectURL(bl);
        const b = document.createElement('a'); // Create an anchor element and store it in the 'b' variable
        b.href = u; // Assign the generated file URL to the 'href' attribute of the anchor element
        b.download = 'Text.txt'; // Set the filename for the downloaded file
        b.click(); // Programmatically trigger a click event to initiate the download
    };

    const handleCopy = () => {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    
      
    const handleClear = ()=>{
        setText('');
    }
    const handleOnChnage = (event)=>{
        // console.log("On Change");
        setText(event.target.value);
    }
    const [text, setText] = useState(" ");
    return (
        <div>
            <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
                <h3>{props.heading}</h3>
                <div className="mb-3">
                    {/* <label htmlFor="myBox" className="form-label">{props.heading}</label> */}
                    <textarea className="form-control" style={{backgroundColor:props.mode==='dark'?'#042743':'white', color:props.mode==='dark'?'white':'black'}} value= {text} id="myBox" rows="8" onChange={handleOnChnage} ></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert To Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert To Lowercase</button>                
                <button className="btn btn-primary mx-1" onClick={handleClear}>Clear</button>                
                <button className="btn btn-primary mx-1" onClick={handleDownloadText}>Download</button>
                <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy</button>

            </div>
            <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
                <h1>Your Text Summary</h1>
                <p>
                {text.trim().split(/\s+/).filter(word => word !== "").length} Words and {text.replace(/\s/g, "").length} Characters
                </p>
            </div>
        </div>
    )
}
