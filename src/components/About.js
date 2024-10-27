import React, {useState}from 'react'

export default function About(props) {
  // const[mystyle,setmystyle]=useState({
  //   color: 'black',
  //   backgroundColor:'white'
  // }
  //   )
  let mystyle= {
     color:props.mode==='dark'?'white':'#042743',
     backgroundColor:props.mode==='dark'?'rgb(36,74,104)':'white'
  }
   
    

 
  return (
    <div className='container' style={mystyle}>
        <h2 className="my-2">About Us</h2>
      <div className="accordion" id="accordionPanelsStayOpenExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
        <strong>Analyze your text</strong>
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
      <div className="accordion-body" style={mystyle}>
          <p>Textutils give you a way to analyze your text quickly and efficiently.Be it word count or character count.</p>


      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
      <strong>Free to use</strong> 
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
      <div className="accordion-body" style={mystyle}>
       <p>Textutils is a free character counter tool that provides instant character count & word 
        count statics for agiven text. Textutils reports the numbers of a character.This is suitable for
        writing text with word/character.
       </p>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
        <strong>Browser Compatible</strong>
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
      <div className="accordion-body" style={mystyle}>
        <p>
          This is a word counter softawre works in any browser such as chrome ,firefox,internet explorere
          Safari,Opera. It suits to count characters in facebook,blog,books,excel document,pdf document
          essays etc.
        </p>
      </div>
    </div>
  </div>
</div>
 {/* <div className="container my-3">
     <button  onClick= {toggleStyle} type="button" className="btn btn-primary ">{btnText}</button>
    </div> */}
    </div>
  )
}
