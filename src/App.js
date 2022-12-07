//import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';


function App() {

  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert = (message,type)=> {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(()=>{
      setAlert(null);
    }, 2000)
  }


  /* Dark mode */
  const toggleMode = ()=> {
    
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = "#383a3e";
      //document.querySelector("textarea").style.color="dark-gray";               /* Alternate method used in TextForn.js */
      document.body.style.color = "#dadada";
      showAlert("Dark mode has been enabled.","success");
      document.title = 'TextUtils - Dark mode';

      /*setInterval(()=> {
        document.title = 'Advertisement'
      }, 1500);

      setInterval(()=> {
        document.title = 'Advertisement-2'
      }, 1500);                    <-----------CONCEPT------------                  */
    }

    else{
      setMode('light');
      document.body.style.backgroundColor = "#f0f0f0";
      document.body.style.color = "black";
      showAlert("Light mode has been enabled.","success");
      document.title = 'TextUtils - Light mode';
    }
  }






  return (
    <>
        <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>

        <Alert alert={alert}/>

        <div className="container my-3">
        <TextForm heading="Enter text to analyze" mode={mode} showAlert={showAlert}/>
        </div> 

        {/*<About></About>*/}
    </>
  );
}

export default App;
