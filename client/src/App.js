import React from 'react';

// import logo from './logo.svg';
// import './App.css';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

const App = () => (
  <div className="App">
    <Jumbotron>
      <h1 className="display-1">Hello, world!</h1>
      <h3 className="display-10">-Yong Lee</h3>
      <p className="lead">Welcome to my website! Please look around!</p>
    </Jumbotron>

    <Container fluid>
      <Row>
        {/* <!-- Sidebar --> */}
        <nav className="col-md-2 d-none d-md-block bg-light sidebar">
          <div className="sidebar-sticky">
            <ul className="nav flex-column">
              {/* <!-- About Me --> */}
              <li className="nav-item">
                <a className="nav-link" href="#aboutMe" id="aboutMeNav" onclick="activeAboutMe()">
                  {/* <!-- <a className="nav-link active" href="#" id="navList"> --> */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    className="feather feather-home">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>
                  About Me
                  {/* <!-- <span className="sr-only">(current)</span> --> */}
                </a>
              </li>
              {/* <!-- Portfolio --> */}
              <li className="nav-item">
                <a className="nav-link" href="#portfolio" id="portfolioNav" onclick="activePortfolio()">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    className="feather feather-file">
                    <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
                    <polyline points="13 2 13 9 20 9"></polyline>
                  </svg>
                  Portfolio
                </a>
              </li>
              {/* <!-- Github Repository --> */}
              <li className="nav-item">
                <a className="nav-link" href="#github" id="githubNav" onclick="activeGithub()">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    className="feather feather-shopping-cart">
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                  </svg>
                  Github Repository
                </a>
              </li>
              {/* <!-- Contact Me --> */}
              <li className="nav-item">
                <a className="nav-link" href="#contactMe" id="contactMeNav" onclick="activeContactMe()">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    className="feather feather-users">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                  Contact Me
                </a>
              </li>
              
              {/* <!-- Current --> */}
              <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                <span>Current</span>
                <a className="d-flex align-items-center text-muted" href="#" aria-label="Add a new report">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    className="feather feather-plus-circle">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="16"></line>
                    <line x1="8" y1="12" x2="16" y2="12"></line>
                  </svg>
                </a>
              </h6>
            </ul>
            {/* <!-- Current Task 1 --> */}
            <ul className="nav flex-column mb-2">
              <li className="nav-item">
                <a className="nav-link" href="https://github.com/yhlee-dho?tab=repositories" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    className="feather feather-file-text">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
                  Linked In
                </a>
              </li>
            </ul>

            {/* <!-- Resume --> */}
            <ul className="nav flex-column mb-2">
              <li className="nav-item">
                <a className="nav-link" href="https://github.com/yhlee-dho?tab=repositories" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    className="feather feather-file-text">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
                  Résumé
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </Row>
    </Container>

    <Container fluid>
      <Row>
        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
          {/* <!-- About Me Title --> */}
          <div className="d-flex border-bottom" id="aboutMe">
            <h1 className="h2">About Me</h1>
          </div>
          {/* <!-- About Me Card --> */}
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <div className="btn-toolbar mb-2 mb-md-0">
              <div className="card mb-3">
                {/* <Image src="" /> */}
                <img src="../Assets/Images/waffledream_edit.jpg" className="card-img-top img-fluid" alt="AboutMeImage"></img>
                <div className="card-body">
                  <h3 className="card-title">Et Hem</h3>
                  <p className="card-text">
                    Paragraph about me, try to msdfsdfulla tempor ornare diam, vitae volutpat erat bibendum eget. Nunc
                    sagittis placerat velit sit amet interdum. Nam in iaculis purus, quis tristique velit. Cras ut nisl
                    vitae orci malesuada placerat non sed magna. Nulla ultrices, dolor at aliquam volutpat,lorem magna
                    pharetra arcu, eget feugiat nisi libero at nunc. Phasellus finibus elit at sapien vehicula varius.
                    Maecenas in dapibus leo. Aliquam molestie vulputate metus. Morbi sed posuere quam, et sodales felis.
                    Proin augue nulla, pellentesque at venenatis vel, sagittis eget nibh. Maecenas libero velit, luctus eu
                    velit vitae, eleifend convallis felis.Nulla tempor ornare diam, vitae volutpat erat bibendum eget.
                    Nunc sagittis placerat velit sit amet interdum. Nam in iaculis purus, quis tristique velit. Cras ut
                    nisl vitae orci malesuada placerat non sed magna. Nulla ultrices, dolor at aliquam volutpat,lorem
                    magna pharetra arcu, eget feugiat nisi libero at nunc. Phasellus finibus elit at sapien vehicula
                    varius. Maecenas in dapibus leo. Aliquam molestie vulputate metus. Morbi sed posuere quam, et sodales
                    felis. Proin augue nulla, pellentesque at venenatis vel, sagittis eget nibh. Maecenas libero velit,
                    luctus eu velit vitae, eleifend convallis felis.Nulla tempor ornare diam, vitae volutpat erat bibendum
                    eget. Nunc sagittis placerat velit sit amet interdum. Nam in iaculis purus, quis tristique velit. Cras
                    ut nisl vitae orci malesuada placerat non sed magna. Nulla ultrices, dolor at aliquam volutpat,lorem
                    magna pharetra arcu, eget feugiat nisi libero at nunc. Phasellus finibus elit at sapien vehicula
                    varius. Maecenas in dapibus leo. Aliquam molestie vulputate metus. Morbi sed posuere quam, et sodales
                    felis. Proin augue nulla, pellentesque at venenatis vel, sagittis eget nibh. Maecenas libero velit,
                    luctus eu velit vitae, eleifend convallis felis. </p>
                  <p className="card-text"><small className="text-muted">Last updated 1 Day ago</small></p>
                </div>
              </div>
            </div>
          </div>

          <br></br>
          <br></br>

          {/* <!-- Portfolio Title --> */}
          <div className="d-flex border-bottom" id="portfolio">
            <h1 className="h2">Portfolio</h1>
          </div>
          <br></br>

          {/* <!-- Portfolio container --> */}
          <div className="d-flex justify-content-between col-12 flex-wrap">

            {/* <!-- Profile Divs --> */}
            {/* <!-- Movies and Groovies --> */}
            <div className="card portfolioCard" id="profile-div">
              <img src="./Assets/Images/portfolio-size_300x200px.png" className="card-img-top" alt="moviesGroovies"></img>
              <div className="card-body">
                <h5 className="card-title">Movies & Groovies</h5>
                <p className="card-text">Cinema finder for current movies</p>
                <br></br>
                <a href="https://yhlee-dho.github.io/Movies-And-Groovies/" target="_blank" className="btn btn-primary">Github</a>
              </div>
            </div>

            {/* <!-- Waffles Bot --> */}
            <div className="card portfolioCard" id="profile-div">
              <img src="./Assets/Images/portfolio-size_300x200px.png" className="card-img-top" alt="discordBotWaffles"></img>
              <div className="card-body">
                <h5 className="card-title">Waffles Bot</h5>
                <p className="card-text">UWO Bot for NB time calculation - under development!</p>
                <a href="https://github.com/yhlee-dho/Discord-Bot-Waffles" target="_blank" className="btn btn-primary">Github</a>
              </div>
            </div>
          
            {/* <!-- Burger Logger --> */}
            <div className="card portfolioCard" id="profile-div">
              <img src="./Assets/Images/portfolio-size_300x200px.png" className="card-img-top" alt="burgerLogger"></img>
              <div className="card-body">
                <h5 className="card-title">Burger Logger</h5>
                <p className="card-text">Node express and handlebars</p>
                <br></br>
                <a href="https://github.com/yhlee-dho/Node-Express-Handlebars-Burgers/" target="_blank" className="btn btn-primary">Github</a>
              </div>
            </div>

            {/* <!-- Note Taker --> */}
            <div className="card portfolioCard" id="profile-div">
              <img src="./Assets/Images/portfolio-size_300x200px.png" className="card-img-top" alt="noteTaker"></img>
              <div className="card-body">
                <h5 className="card-title">Note Taker</h5>
                <p className="card-text">Note taker using express</p>
                <br></br>
                <a href="https://github.com/yhlee-dho/Express-Note-Taker/" className="btn btn-primary">Github</a>
                <a href="https://notetaker-yhl.herokuapp.com/" target="_blank" className="btn btn-primary">Heroku</a>
              </div>
            </div>

            {/* <!-- Developer Profile Generator --> */}
            <div className="card portfolioCard" id="profile-div">
              <img src="./Assets/Images/portfolio-size_300x200px.png" className="card-img-top" alt="profileGenerator"></img>
              <div className="card-body">
                <h5 className="card-title">Profile Generator</h5>
                <p className="card-text">Automatically create a profile pdf using github information</p>
                <a href="https://github.com/yhlee-dho/Developer-Profile-Generator/" target="_blank" className="btn btn-primary">Github</a>
              </div>
            </div>

            {/* <!-- Day Planner --> */}
            <div className="card portfolioCard" id="profile-div">
              <img src="./Assets/Images/portfolio-size_300x200px.png" className="card-img-top" alt="dayPlanner"></img>
              <div className="card-body">
                <h5 className="card-title">Day Planner</h5>
                <p className="card-text">moment.js integration into html functions</p>
                <br></br>
                <a href="https://github.com/yhlee-dho/Third-Party-APIs-Day-Planner" target="_blank" className="btn btn-primary">Github</a>
              </div>
            </div>

            {/* <!-- Employee Tracker --> */}
            <div className="card portfolioCard" id="profile-div">
              <img src="./Assets/Images/portfolio-size_300x200px.png" className="card-img-top" alt="employeeTracker"></img>
              <div className="card-body">
                <h5 className="card-title">Employee Tracker</h5>
                <p className="card-text">CMS solution for tracking employees using MySQL db</p>
                <a href="https://github.com/yhlee-dho/MySQL-Employee-Tracker" target="_blank" className="btn btn-primary">Github</a>
              </div>
            </div>

            {/* <!-- Template Engine --> */}
            <div className="card portfolioCard" id="profile-div">
              <img src="./Assets/Images/portfolio-size_300x200px.png" className="card-img-top" alt="Testing card"></img>
              <div className="card-body">
                <h5 className="card-title">Template Engine</h5>
                <p className="card-text">Employee summary using html templates</p>
                <br></br>
                <a href="https://github.com/yhlee-dho/Template-Engine-Employee-Summary" target="_blank" className="btn btn-primary">Github</a>
              </div>
            </div>

            {/* <!-- Weather Dashboard --> */}
            <div className="card portfolioCard" id="profile-div">
              <img src="./Assets/Images/portfolio-size_300x200px.png" className="card-img-top" alt="weatherDashboard"></img>
              <div className="card-body">
                <h5 className="card-title">Weather Dashboard</h5>
                <p className="card-text">Weather display using information from 3rd party API</p>
                <a href="https://github.com/yhlee-dho/Server-Side-APIs-Weather-Dashboard" target="_blank" className="btn btn-primary">Github</a>
              </div>
            </div>

            {/* <!-- Project 2 --> */}
            <div className="card portfolioCard" id="profile-div">
              <img src="./Assets/Images/portfolio-size_300x200px.png" className="card-img-top" alt="youtubeSearch"></img>
              <div className="card-body">
                <h5 className="card-title">Project 2</h5>
                <p className="card-text">Minimalist search and replace</p>
                <br></br>
                <a href="https://github.com/yhlee-dho/Project-2" target="_blank" className="btn btn-primary">Github</a>
                <a href="https://spiderfly.herokuapp.com/" target="_blank" className="btn btn-primary">Heroku</a>
              </div>
            </div> 
          </div>
                  
          <br></br>
          <br></br>

          {/* <!-- Github Title --> */}
          <div className="d-flex border-bottom" id="github">
            <h1 className="h2">Github Repository</h1>
          </div>

          {/* <!-- Github Cards --> */}
          <div
            className="d-inline-flex justify-content-around flex-wrap flex-md-nowrap align-items-center align-self-stretch border-bottom">
            <div className="emptyBox" id="githubDisplay"></div>
          </div>

          {/* <!-- Contact Me Title --> */}
          <div className="d-flex border-bottom" id="contactMe">
            <h1 className="h2">Contact Me</h1>
          </div>

          {/* <!-- Contact Me Cards --> */}
          <div className="d-inline-flex justify-content-around flex-wrap flex-md-nowrap align-items-center align-self-stretch border-bottom">
            <div className="emptyBox" id="contactMeDisplay"></div>
          </div>
        </main>
      </Row>
    </Container>

  </div>
)


export default App;
