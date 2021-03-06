import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from '../Login/Login.jsx';
import SignUp from '../SignUp/SignUp.jsx';
import NavBar from '../NavBar/NavBar.jsx';
import ProfilePage from '../ProfilePage/ProfilePage.jsx';
import Home from '../Home/Home.jsx';
import Notifications from '../Notifications/Notifications.jsx';
import MessagesPage from '../MessagesPage/MessagesPage.jsx';
import './App.css';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState({
    userID: "",
    username: "",
    email: "",
    bio: "",
    country: "",
    gender: "",
    pronouns: "",
    birthdate: "",
    pendingConnections: [],
    rooms: [],
    profilePicture: ""
  });
  const [currentRoom, setCurrentRoom] = useState({});
  const [darkMode, setdarkMode] = useState(false);

  function toggleDarkMode() {
    setdarkMode(!darkMode);
  }

  return (
    <div className={ darkMode? 'productDetailPageDark': 'productDetailPageLight' }>
      <Router>
        <Switch>
          <Route path="/" exact render={() => (
            <Home userID={userData.userID} loggedIn={loggedIn} setLoggedIn={setLoggedIn} username={username} rooms={userData.rooms} setUserData={setUserData} setCurrentRoom={setCurrentRoom} userData={userData} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          )} />
          <Route path="/login" exact render={() => (
            <Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} username={username} setUsername={setUsername} />
          )} />
          <Route path="/signup" exact render={() => (
            <SignUp />
          )} />
          <Route path="/profile" exact render={() => (
            <ProfilePage userID={userData.userID} userData={userData} loggedIn={loggedIn} setLoggedIn={setLoggedIn} username={username} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          )} />
          <Route path="/notifications" exact render={() => (
            <Notifications userID={userData.userID} loggedIn={loggedIn} setLoggedIn={setLoggedIn} pendingConnections={userData.pendingConnections} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          )} />
          <Route path="/messages" exact render={() => (
            <MessagesPage userID={userData.userID} loggedIn={loggedIn} setLoggedIn={setLoggedIn} rooms={userData.rooms} currentRoom={currentRoom} />
          )} />
        </Switch>
      </Router>
    </div>
  )
}

export default App

/*
  <Login />
  <SignUp />
  <ProfilePage />
  <Home />
  <Notifications />
  <MessagesPage />
*/