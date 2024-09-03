//style
import "./cssPages/Home.css"

// components
import { NavLink } from "react-router-dom"

// Images
import Profile from "../assets/images/profile.jpeg"

export default function Home() { 

    return (
      <>
        <div className="flexContainer">
            <div className="box1">                
                <div className="box3">
                  <p>Web Application Developper, Electrical Engineer,
                    Entrepreneur, & Educator</p>
                </div>
                <div className="box4">
                  <img src={Profile} alt="profile" width="300px" />
                </div> 
            </div> 
            <div className="box2">                
              <div className="box5">
                <h1>Hello, Welcome!</h1>
                <h2>A bit about me:</h2>
              </div> 
              <div className="box6">
                <div className="box7">
                <NavLink to='resume'><h3>My Resume</h3></NavLink>
                </div>
                <div className="box7">
                <NavLink to='projects'><h3>My Projects</h3></NavLink>
                </div>
                <div className="box7">
                <NavLink to='resume'><h3>My unique skills</h3></NavLink>
                </div>
              </div> 
            </div>
        </div>
      </>
    );
  }