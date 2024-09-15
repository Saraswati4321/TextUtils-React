//for react function based component i only type rfc and enter
import React, {useState} from 'react'
//useState it is a hook,hooks are helps us to use the componet of any class without creating then or without using them


export default function Textform(props) {
  const handleupClick = ()=>{
   
    let newText=text.toUpperCase(); 
    setText(newText);
    props.setalert("The text is converted to uppercase","Success");
  }
  const handleloClick = ()=>{
    
    let newText=text.toLowerCase(); 
    setText(newText);
    props.setalert("The text is converted to lowercase","Success");
  }
  const handleClearClick = ()=>{
    
    let newText=''; 
    setText(newText);
    props.setalert("The text is cleared","Success");
  }
  const handleReverseClick = ()=>{
    
    let newText=text.split('').reverse().join(''); 
    setText(newText);
    props.setalert("The text is reversed","Success");
  }
  const handleCopy = (event)=>{
    var text=document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.setalert("The text is copied to clipboard","Success");
  }
  //below function is used to type the text inside the textarea, it is a event handeler
   const handleOnchange = (event)=>{
   
    setText(event.target.value);
  }
  
  const [text, setText]= useState('');//when we want to update we can update through setText

  return (
    <>
    <div>
     
    
<div className="container" style={{color:props.mode==='light'?'black':'white'}}>
<h1>{props.heading}</h1>
  
  <textarea className="form-control" value={text} onChange={handleOnchange} style={{backgroundColor:props.mode==='light'?'white':'grey' ,color:props.mode==='#042743'?'white':'#042743'}} id="mybox" rows="8"
 ></textarea>
</div>
<button className="btn btn-primary mx-2 my-2"  onClick={handleloClick}>Convert To Lowercase</button>
<button className="btn btn-primary mx-2 my-1"  onClick={handleupClick}>Convert To Uppercase</button>
<button className="btn btn-primary mx-2 my-1"  onClick={handleClearClick}>Clear Text</button>
<button className="btn btn-primary mx-2  my-1"  onClick={handleReverseClick}>Reverse Text</button>
<button className="btn btn-primary mx-2  my-1"  onClick={handleCopy}>Copy Text</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='light'?'black':'white'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} words {text.length} characters</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something here to preview"}</p>
        
    </div>
    </>
  )
  
  //here i can change the text by using setText but cannot type anything inside the textbox bcs the value of the textbox is set to text which is a state variable 
  //so for typing inside the textarea we have to use event.target.value inside the onchange function by calling the setText varibale
  //handleOnchange is a event handeler we can use it many times
  //text.length is used to find the number of characters where as text.split(" ").length used to find number of words
  //text.split(" ") -> it first convert the string into array and then calculate the length 
}
