import { color } from '@mui/system';
import React from 'react';
import { mockComponent } from 'react-dom/test-utils';
import './App.css';


function App() {
  return (
    <div className="App">
      <div className="div3">
        <nav className="navigation_bar">
          <img src="ITOlogo.png" alt="ITO Logo" width="139" height="109"></img>
          <p></p>
          <ul className="navigation_list">
            <li className="navigation_list_item"><a href="#home">Home</a></li>
            <li className="navigation_list_item"><a href="#current_projects">Current Projects</a></li>
            <li className="navigation_list_item"><a href="#about_us">About Us</a></li>
            <li className="navigation_list_item"><a href="#contact_us">Contact Us</a></li>
            <li className="navigation_list_item"><a href="#join_our_discord">Join Our Discord</a></li>
          </ul>
          <ul className="navigation_list">
            <li className="navigation_list_item"><a href="#TBD">Login</a></li>
            <li className="navigation_list_item"><a href="#TBD">Sign Up</a></li>
            <li className="navigation_list_item">
              <a href="#darkmode"><img id="moon" src="darkmode.png" alt="Light/Dark Mode" width="35" height="35"></img></a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="landingPageContent">
        <div className="div1">
          <div className="Welcome">Welcome to<br></br>the IT Oxygen<br></br>Enterprise.</div>
          <div className="JoinUs">Join us in person in Dillman 214 every Wednesday at 5pm.</div>
          <div className="ContactUs-Discord">
            <button className="ContactUsButton">Contact Us</button>
            <div className="Spacer"></div>
            <a href="https://discord.gg/Tae8QmxcTt" target="_blank" className="JoinDiscord">Join Our Discord</a>
            <div className="RightArrowDiscord">➔</div>
          </div>
          <div className="quarterCircles">
            <img src="landingArt.png"></img>
          </div>
        </div>
        <div className="div2">
          <div className="MapImage">


            <img className="overlay1" src="/images/map/map1x.png"></img>
            <img className="overlay2" src="/images/stars/stars1x.png"></img>

          </div>
          <div className="InfoSection">
            <div className="column">
              <div className="InfoTitle">Student Ran</div>
              <div className="InfoContents">All teams and the<br></br>enterprise itself are led<br></br>by students.</div>
            </div>
            <div className="Spacer"></div>
            <div className="column">
              <div className="InfoTitle">Industry Experience</div>
              <div className="InfoContents">Get industry knowledge from<br></br>students with real experience<br></br>in the field.</div>
            </div>
            <img src="downArrow.png" width="86" height="137" />
          </div>
        </div>
      </div>
    </div>
  );
}

function darkMode() {
  
}

export default App;
