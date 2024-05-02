import React from 'react';

export default function Land() {
  return (
    <div>
      <div className="header neon">
        <div className="head-logo-cont">
          <img src="images/logo-wb.png" alt="logo"/>
          <div>REM</div>
        </div>
      </div>

      <div className="hero">
        <img className="hero-pic" src="images/portrait.jpg" alt="portrait"/> <br></br>
        <img className="hero-border" src="images/border.png" alt="art"/>
      </div>

      <div className="tag">
        <h1 className="tag-name">Prem A<span className="flick">g</span>arwal's</h1>
        <h3 className="tag-line">Web Designer & Developer</h3>
      </div>

      <div className="left-ball">
        <div className="wire-1"></div>
        <div className="ball-1 neon-circ"></div>
      </div>

      <div className="right-ball">
        <div className="wire-2"></div>
        <div className="ball-2"> <img src="images/logo-wr.png" alt="logo-wr"/></div>
        <img className="leaf" src="images/leaf-art.png" alt=""/>
      </div>

      <div className="intro">
        <p> Tech and <span className="flick">cybersecurity</span> enthusiast with a strong passion for designing and creating. With over 5 years of experience in <span className="flick">Python</span>, I excel in developing innovative projects that span <span className="flick">web design</span>, <span className="flick">music production</span> and more. Proficient in tools such as <span className="flick">Photoshop</span>, <span className="flick">Premiere Pro</span> and SolidWorks. I enjoy bringing ideas to life with sharp attention to detail. </p> 
        <p> My portfolio showcases diverse projects, from crafting unique websites to composing short music tracks. Whether it's coding, designing, or producing, I thrive on the challenge of turning visions into reality. Let's connect and create something exceptional!</p>
      </div>

      <div className="edu">
        <div className="book neon-rect">
          <div>
            <h2>Education</h2>
            <img className="flick" src="images/kgp-logo.png" alt="kgp-logo"/>
            <h4>Indian Institute of Technology, Kharagpur.</h4>
            <p>B. Tech.</p>
          </div>
        </div>
      </div>

      <div className="skill-set">
        <div className="skill neon-rect">
          <div>
            <h1>Coding/Programming</h1>
            <p>I have a good experience in python. Had been a web developer for a long time. Worked on various small projects for learning purpose.</p>
            <p><h4>Languages:</h4> <span className="flick">Python</span>, C, HTML, CSS, JS, ReactJS</p>
          </div>
        </div>
        <div className="skill neon-rect">
          <div>
            <h1>Designing</h1>
            <p>I have a strong will to create own designs and implement it, converting my vision into reality....</p>
            <p><h4>Sofwares:</h4> <span className="flick">Figma</span>, Canva, Photoshop, Illustartor, SolidWorks.</p>
          </div>      
        </div>
        <div className="skill neon-rect">
          <div>
            <h1>Editing</h1>
            <p>I have a good skills in video color grading and color corrections, along with photo and video editing.</p>
            <p><h4>Softwares:</h4> Photoshop, <span className="flick">Premiere Pro</span>.</p>
          </div>  
        </div>
        <div className="skill neon-rect">
          <div>
            <h1>Techy skills</h1>
            <p>I am a cybersecurity enthusiast and I spend a lot of time learning how the things work fundamentally. Apart from these, I have also used some modules and sofwares for a semester to make my DIY project. </p>
            <p><h4>Sofwares: </h4> Fusion360, TinkerCAD, ArduinoIDE</p>
            <p><h4>Knowledge: </h4> <span className="flick">Networking</span>, Cryptography, Reverse Engineering.</p>
          </div>  
        </div>
        <div className="skill neon-rect">
          <div>
            <h1>Sound Designing</h1>
            <p>Along with all of these, I have a passion in sound designing and music production. I love to create short tracks in some of my free times...</p>
            <p><h4>Softwares:</h4> <span className="flick">FL Studio</span>.</p>
          </div>  
        </div>
      </div>

      <div className="projects">
        <h1>Project Gallary</h1>
        <div className="project-cont">
          <div className="project">
            <h2>Weebo</h2>
          </div>
          <div className="project">
            <h2>Portfolio Webpage</h2>
          </div>
          <div className="project">
            <h2>Trading Indicator</h2>
          </div>
        </div>
      </div>
      <div className="footer">
        footer
      </div>
  </div>
  );
}

