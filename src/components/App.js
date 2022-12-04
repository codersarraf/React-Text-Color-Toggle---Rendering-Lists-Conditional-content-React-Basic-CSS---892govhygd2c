import React, {useEffect, useState} from 'react'
import '../styles/App.css';

const App = () => {
  const [classes, setClasses] = useState("redColor")
  const handleStyleChange = ()=>{
    setClasses("blueColor");
  }
  return (
    <div id="main">
      <p className={classes} >Newton School</p>
      <button id='button' onClick={handleStyleChange}>Change Style</button>
    </div>
  )
}


export default App;
