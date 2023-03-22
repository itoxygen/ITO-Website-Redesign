import styled from '@emotion/styled';
import { color } from '@mui/system';
import React from 'react';
import { mockComponent } from 'react-dom/test-utils';
import { useState } from 'react';
import './App.css';

function App() {
  const [show, setShow]=useState(true);
  return (
    <div>

      {
        <video muted playsInline autoPlay loop id="VideoBackground">
          <source src = "northern lights.mp4" type="video/mp4"></source>
        </video>
      }

      {
        !show?<video muted playsInline autoPlay loop id="VideoBackground">
        <source src = "waves.mp4" type="video/mp4"></source>
      </video>:null
      }

    <header className="viewport-header">
      <h1>
        <div className="Welcome"><p>Welcome to the <span className="ColorWoah">IT Oxygen </span>Enterprise.</p></div>
      </h1>
    </header>

    <div className="content">
      <div className="flex-container">
        <div className="flex-child">
          <h1>ITOxygen</h1>
        </div>
        <div className="flex-child">
          <p>Lorem ipsum...</p>
        </div>
        <div className="flex-child">
          <div>
            <button className = "lightdark" onClick={()=>setShow(!show)}>Toggle <br></br>Dark Mode</button>
          </div>
        </div>
      </div>
    </div>

    </div>
    
    

  );
}


export default App;
