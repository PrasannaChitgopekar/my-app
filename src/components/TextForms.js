import React, { useState } from "react";

export default function TextForms(props) {

  
  let uppercase = () => {
    console.log("clicked");
    let uppercase = text.toUpperCase();
    setText(uppercase);
    props.showAlert("uppercase","success")
  };
  let lowercase = () => {
    console.log("clicked");
    let lowercase = text.toLowerCase();
    setText(lowercase);
    props.showAlert("lowercase","success")
  };
  let handleOnChange = (event) => {
    console.log("on change");
    setText(event.target.value);
  };

  let clearText = () => {
    let newtext = "";
    setText(newtext);
    props.showAlert("text cleared","success")
  };

  let dark = () => {
    document.getElementById("root").style.backgroundColor = "Black";
    document.getElementById("root").style.color = "White";
    document.getElementById(
      "exampleFormControlTextarea1"
    ).style.backgroundColor = "black";
    document.getElementById("exampleFormControlTextarea1").style.color =
      "white";
  };

  let light = () => {
    document.getElementById("root").style.backgroundColor = "white";
    document.getElementById("root").style.color = "black";
    document.getElementById("exampleFormControlTextarea1").style.backgroundColor = "white";
    document.getElementById("exampleFormControlTextarea1").style.color ="black";
  };
  //( https://www.youtube.com/watch?v=VzF2iTTc0MA ) this videp link is for changing light mode to dark mode 
   const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlert("speaking","success")
  };

  const handleReverse = (event) => {
    /* Convert string to array*/
    let strArr = text.split("");
    /* Reverse array*/
    strArr = strArr.reverse();
    /* Convert array to string*/
    let newText = strArr.join("");
    setText(newText);
    props.showAlert("text is reversed","success")
  };

  const handleExtraSpaces = ()=>{
    let newText = text.replace(/\s+/g, ' ').trim();
    setText(newText)
    props.showAlert("extra space removed","success")
    }


    const handleCopy = ()=>{
      var newtext = document.getElementById("exampleFormControlTextarea1")
      newtext.select();
      navigator.clipboard.writeText(newtext.value)
      props.showAlert("text coppied","success")
      
    }

  const [text, setText] = useState("");
  return (
    <>
      <div id="demo" style={{color:props.mode === 'dark'?'white':'black'}}>
        <div className="container">
          <h1>{props.heading}</h1>
          
          <div className="mb-3">
            <textarea
              className="form-control"
              onChange={handleOnChange}
              value={text}
              id="exampleFormControlTextarea1"
              rows="12"
              style={{backgroundColor : props.mode === 'dark'?'black':'white',
            color:props.mode === 'dark'?'white':'black'}}
            ></textarea>
          </div>
          <button className="btn btn-outline-danger" onClick={uppercase}>
            convert to upper case
          </button>
          <spam> </spam>
          <button className="btn btn-outline-primary" onClick={lowercase}>
            convert to lower case
          </button>
          <spam> </spam>
          <button className="btn btn-outline-success" onClick={clearText}>
            clear the text
          </button>
          <spam> </spam>
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={dark}
          >
            Dark mode
          </button>
          <spam> </spam>
          <button
            type="button"
            className="btn btn-outline-warning"
            onClick={light}
          >
            light mode
          </button>
          <spam> </spam>
          <button
            type="button"
            className="btn btn-outline-info my-3"
            onClick={speak}
          >
            speak mode
          </button>
          <spam> </spam>
          <button
            type="button"
            className="btn btn-outline-danger"
            onClick={handleReverse}
          >
            reverse the text
          </button>
          <spam> </spam>
          <button
            type="button"
            className="btn btn-outline-success"
            onClick={handleExtraSpaces}
          >
            remove extra spaces
          </button>
          <spam> </spam>
          <button
            type="button"
            className="btn btn-outline-success"
            onClick={handleCopy}
          >
            copy text
          </button>
          
        </div>
        <div className="container my-3">
          <h1>Your Summary</h1>

          <p>
            {text.split(" ").length} words and {text.length} charectors and{" "}
            {text.split("\n").length} lines
          </p>
          <p>{0.008 * text.split(" ").length} min you can read this</p>
          <h1>Preview</h1>
          <p>{text.length>0?text:"enter some text to preview"}</p>
          <h1>Number Of sentences {text.split(".").length}</h1>
         
        </div>
      </div>
    </>
  );
}
