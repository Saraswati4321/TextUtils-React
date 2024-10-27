
import './App.css';
// import About from './components/About';
 import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import React, { useState } from 'react';
// import{
//   //BrowserRouter as 
  
//   Routes,
//   Route,
  
  
//   BrowserRouter
// } from "react-router-dom"




function App() {
  const[mode,setMode]=useState('light');
  const[alert, setAlert]=useState(null);

const setalert = (message,type) =>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout (()=>{
      setAlert(null);
    },3000);
}
const removeBodyClasses=()=>{
  document.body.classList.remove('bg-light')
  document.body.classList.remove('bg-dark')
  document.body.classList.remove('bg-danger')
  document.body.classList.remove('bg-warning')
  document.body.classList.remove('bg-success')
 
}

 const toggleMode =(cls) =>{
  removeBodyClasses();
  document.body.classList.add('bg-'+cls)
    if(mode==='light'){
      setMode('dark');
      document.title='Textutils-Dark Mode';
      document.body.style.backgroundColor='#042743';
      setalert("Dark mode has been enabled","Success");
      // setInterval(()=>{
      //   document.title= 'Textutils is an amazing app';
      // },1000);
      // setInterval(()=>{
      //   document.title= 'Install Textutils ';
      // },1500)
    }
    else{
      setMode('light');
      //document.title='Textutils-Light Mode';
      document.body.style.backgroundColor='white';
      setalert("light mode has been enabled","Success");
    }
 }
  return (
    <>
 {/* <BrowserRouter> */}
<Navbar title="TextUtils2" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
  
<div className="container" my-3>
<Textform heading = "Try-TextUtils-Word Counter Character Counter" mode ={mode} setalert = {setalert}/>
{/* <Routes>
 <Route exact path="/about" element={<About mode ={mode}/> } />

     
     <Route exact path='/'  element={
     <Textform heading = "Try-TextUtils-Word Counter Character Counter" mode ={mode} setalert = {setalert}/>} >
     
     </Route> 

  </Routes> */}

{/* <About/> */}
</div>

 {/* </BrowserRouter>  */}


    </>
  );
}
//in Navbar we pass the value of prop
//mode is a prop here
//document.title here changes the in the title of the website
export default App;
