//import { click } from '@testing-library/user-event/dist/click';
import React, {useState} from 'react'

export default function TextForm(props) {


const [text, setText] = useState('Enter text here');
//setText("new text");

//const [a, b] = useState(1);   CONCEPT : user for removing enter text here on click - variable that changes its value in if statement on function call



  let btnStyle = {
    margin: '3px'
  }


    const handleUpClick = ()=>{
        //console.log("check");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upper case","success");
    }

    const handleLowClick = ()=>{
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to lower case","success");
  }

    const handleClr = ()=>{
    setText("");
    props.showAlert("Text cleared","primary");
}
    

    const handleExtraSpaces = ()=>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));        //<-----------------**
      props.showAlert("Extra spaces cleared","success");
  }


    const handleCopy = ()=>{
      let newText = document.getElementById("Box");
      newText.select();
      navigator.clipboard.writeText(newText.value);        //<-----------------**
      props.showAlert("Text copied to clipboard","primary");
  }

    const handleOnChange = (event)=>{
        //console.log("change");
        setText(event.target.value);              //<-----------------**
    }
 



    const clearOnClick = ()=> {
      if(text==="Enter text here"){
        setText('');                               //<-----------------**
      }
    }

    const EventOnBlur = ()=> {
      if(text.length===0){
        setText("Enter text here");
      }
    }



  return (
    <>
 <div className="container">
    <div className="mb-3">

    <h1>{props.heading}</h1>


    <textarea className="form-control ta-design" id="Box" rows="10" value={text} onChange={handleOnChange} onClick={clearOnClick} onBlur={EventOnBlur} style={{backgroundColor: props.mode==='dark'?'grey':'white' ,color: props.mode==="dark"?"dark-gray":"black", width: 850}}></textarea>       {/* Alternate method */}


    </div>

    <button type="button" className={`btn btn-${props.mode==="dark"?"warning":"dark"}`} onClick={handleUpClick} style={btnStyle}>Convert to upper case</button>     
    <button type="button" className={`btn btn-${props.mode==="dark"?"warning":"dark"}`} onClick={handleLowClick} style={btnStyle}>Convert to lower case</button>     
    <button type="button" className={`btn btn-${props.mode==="dark"?"warning":"dark"}`} onClick={handleClr} style={btnStyle}>Clear</button>    
    <button type="button" className={`btn btn-${props.mode==="dark"?"warning":"dark"}`} onClick={handleExtraSpaces} style={btnStyle}>Clear extra spaces</button>    
    <button type="button" className={`btn btn-${props.mode==="dark"?"warning":"dark"}`} onClick={handleCopy} style={btnStyle}>Copy</button>    
 </div>

 <div className="container my-2">

    <h2>Your text summary</h2>
    <p>{text.length} characters and {text.split(" ").length} words</p>
    <p>{0.008*text.split(" ").length} <strong>minutes read</strong></p>

    <h2>Preview</h2>
    <p> {text.length>0?text:"Enter something to preview"} </p>
 </div>
    </>
  )
}
