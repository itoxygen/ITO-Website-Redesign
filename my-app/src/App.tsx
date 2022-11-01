import React from 'react';
import './App.css';


function App() {
  return (
    <div className="App">
        <div className="div1">
           <div className = "Welcome">Welcome to<br></br>the IT Oxygen<br></br>Enterprise.</div>
           <div className = "JoinUs">Join us in person in Dillman 214 every Wednesday at 5pm.</div>
           <div className="ContactUs-Discord">
            <button className="ContactUsButton">Contact Us</button>
            <div className="Spacer"></div>
            <div className="JoinDiscord">Join Our Discord</div>
            <div className="RightArrowDiscord">➔</div>
           </div>
        </div>
        <div className="div2">
          Nick's Section
        </div>
        <div className="div3">
          Noah's Section
        </div>
    </div>
  );
}

export default App;
