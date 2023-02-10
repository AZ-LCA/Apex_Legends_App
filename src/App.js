import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import './App.css';
import Profile from './components/Profile';
import Weapons from './components/Weapons';
import GeneralChat from './components/GeneralChat';
import Welcome from './components/Welcome';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import Container from 'react-bootstrap/Container';
import axios from 'axios';



class App extends Component{
  constructor(props) {
    super(props)

    this.state = {
      auth: false
    }
  }

  userSignedIn = () => {
    this.setState({
      auth: true
    })
  }

  userSignedOut = () => {
    localStorage.removeItem("jwt")
    this.setState({
      auth: false
    })
  }

  componentDidMount = () => {
    const token = localStorage.getItem("jwt")
    if(token !== null) {
      this.userSignedIn()
    }
  }

  render() {
    return(
      <>
        {this.state.auth && 
          <Router>
            <nav className='navbar navbar-expand-lg navbar-light bg-light'>
              <Link to="/api/user">Profile</Link>
              <Link to="/api/weapons">Weapons</Link>
              <Link to="/api/generalchat">Chat</Link>
              <Link to="/api/logout" onClick={this.userSignedOut}>Logout</Link>
              {/* Work out how to do the logout in the backend */}
            </nav>
            <Routes>
              <Route path="/api/user" element={<Profile />} />
              <Route path="/api/weapons" element={<Weapons />} />
              <Route path="/api/generalchat" element={<GeneralChat />} />
            </Routes>
          </Router>}

        {!this.state.auth &&
        <Welcome userSignedIn={this.userSignedIn} />
        }
        
      </>
      

    )
  }
}

export default App;
