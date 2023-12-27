import React, { useState } from "react";

export default function Home(props) {
  const [text, textChange] = useState("Type some text");
  const onValChange = (event) => {
    textChange(event.target.value);
  };
  const convertToUCase = () => {
    textChange(text.toUpperCase());
  };
  const convertToLCase = () => {
    textChange(text.toLowerCase());
  };
  const convertToCaps = () => {
    if (!text) return;
    let l = text.split(" ");
    for (let i = 0; i < l.length; i++) {
      let str = l[i].split("");
      if (str.length === 0) return;
      str[0] = str[0].toUpperCase();
      l[i] = str.join("");
    }
    l = l.join(" ");
    textChange(l);
  };
  const clearText = () => {
    textChange("");
  };
  return (
    <>
      <div
        className="container-fluid"
        style={{ backgroundColor: `${props.mode}`,transition:'0.3s', height: "100vh", width: "100%", color:`${props.mode==='white'?'black':'white'}` }}
      >
        <div className="container">
          <h1 style={{height:'60px',display:'flex',alignItems:'center'}}>{props.textbox}</h1>
          <div className="mb-3">
            <label htmlFor="mybox" className="form-label">
              Enter message
            </label>
            <textarea
              className="form-control"
              id="mybox"
              value={text}
              rows="8"
              onChange={onValChange}
              style={{transition:'0.3s',
              color:`${props.mode==='white'?'black':'white'}`,
              borderWidth:'3px',
              borderColor:`${props.mode==='white'?'black':'white'}`,
              backgroundColor:`${props.mode}`
            }}
            />
            <div id="emailHelp" className="form-text" style={{transition:'0.3s', color:`${props.mode==='white'?'black':'white'}`}}>
              We'll never share your email with anyone else.
            </div>
          </div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={convertToUCase}
            disabled={text.length===0}
          >
            UPPERCASE
          </button>
          <button
            type="button"
            className="btn btn-primary mx-3"
            onClick={convertToLCase}
            disabled={text.length===0}
          >
            lowercase
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={convertToCaps}
            disabled={text.length===0}
          >
            Capitalize
          </button>
          <button
            type="button"
            className="btn btn-primary mx-3"
            onClick={clearText}
            disabled={text.length===0}
          >
            Clear
          </button>
          <div className="container">
            <h2>Summary :</h2>
            <p>
              Words : {text.split(/\s+/).filter((ele)=>{return ele.length!==0}).length}
              <br />
              Letters : {text.length}
              <br />
              Read Time : {text.split(" ").filter((ele)=>{return ele.length!==0}).length * 0.008}minutes
            </p>
            <h2>Preview : </h2>
            <p>{text}</p>
          </div>
        </div>
      </div>
    </>
  );
}
