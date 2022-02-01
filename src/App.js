import React,{ useState } from 'react';
import { Route,Routes } from 'react-router-dom';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import './App.css';
import Favourites from './components/Favourites';
import Heading from './components/Heading';
import SearchMeme from './components/SearchMeme';

const App = () => {
    const clientID = '561198278802-krums0hsisfrp5atk6ekhul8ajtvgus3.apps.googleusercontent.com';
    const [showloginButton, setShowloginButton] = useState(true);
    const [showlogoutButton, setShowlogoutButton] = useState(false);
    const onLoginSuccess = (res) => {
        setShowloginButton(false);
        setShowlogoutButton(true);
    }
    
    const onLoginFailure = (res) => {
        alert("Login Failed");
    }
    
    const onSignoutSuccess = () => {
        alert("You have been logged out successfully");
        setShowloginButton(true);
        setShowlogoutButton(false);
    }
  return (
    <div className='layout'>
      <Heading />
      {showloginButton &&
                <GoogleLogin
                    clientId={clientID}
                    buttonText="Sign In with google"
                    onSuccess={onLoginSuccess}
                    onFailure={onLoginFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                />}
            {showlogoutButton &&
                <GoogleLogout
                    clientId={clientID}
                    buttonText="Sign Out"
                    onLogoutSuccess={onSignoutSuccess}
                >
                </GoogleLogout>}
        <Routes>
          <Route exact path='/' element={<SearchMeme />} />
          <Route exact path='/favourites' element={<Favourites showloginButton={showloginButton} showlogoutButton={showlogoutButton} />} />
        </Routes>
    </div>
  );
};
export default App;
