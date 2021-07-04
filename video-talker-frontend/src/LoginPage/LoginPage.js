import React, { useState } from 'react';
import { connect } from 'react-redux';
import logo from '../resources/logo.png';
import { useHistory } from 'react-router-dom';
import { setUsername } from '../store/actions/dashboardActions';
import { registerNewUser } from '../utils/wssConnection/wssConnection';
import './LoginPage.css';

const LoginPage = ({ saveUsername }) => {
  const [username, setUsername] = useState('');

  const history = useHistory();

  const handleSubmitButtonPressed = () => {
    registerNewUser(username);
    saveUsername(username);
    history.push('/dashboard');
  };

  return (
    <div className="bod">
<body>

<div class="container">

  <div class="row">
    <div class="hexagon"></div>
    <div class="hexagon"></div>
    <div class="hexagon"></div>
    <div class="hexagon"></div>
    <div class="hexagon"></div>
    <div class="hexagon"></div>
    <div class="hexagon"></div>
    <div class="hexagon"></div>
    <div class="hexagon"></div>
    <div class="hexagon"></div>
    <div class="hexagon"></div>
    <div class="hexagon"></div>
    <div class="hexagon"></div>
  </div>

  <div class="row">
  <div class="hexagon"></div>
    <div class="hexagon"></div>
    <div class="hexagon"></div>
    <div class="hexagon"></div>
    <div class="hexagon"></div>
    <div class="hexagon"></div>
    <div class="hexagon"></div>
    <div class="hexagon"></div>
    <div class="hexagon"></div>
    <div class="hexagon"></div>
    <div class="hexagon"></div>
    <div class="hexagon"></div>
    <div class="hexagon"></div>
  </div>

  <div class="cntr">
      <div class="card">
        <h1 class="card-title">Zz-CALLz</h1>
        <small class="card-subtitle">A compact video calling service.</small>
        <form class="card-form">
        <label for="username">HOP IN</label>
            <div class="card-input-container username">
                <input type="text" placeholder="Enter your nickname" id="username"  value={username} onChange={(event) => { setUsername(event.target.value); }}/>
            </div>
            <button class="card-button"  onClick={handleSubmitButtonPressed}>GO</button>
        </form>
    </div>
    </div>
  
      <div class="row">
      <div class="hexagon"></div>
    <div class="hexagon"></div>
    <div class="hexagon"></div>
    <div class="hexagon"></div>
    <div class="hexagon"></div>
    <div class="hexagon"></div>
    <div class="hexagon"></div>
    <div class="hexagon"></div>
    <div class="hexagon"></div>
    <div class="hexagon"></div>
    <div class="hexagon"></div>
    <div class="hexagon"></div>
    <div class="hexagon"></div>
      </div>
     
      <div class="row">
      <div class="hexagon"></div>
    <div class="hexagon"></div>
    <div class="hexagon"></div>
    <div class="hexagon"></div>
    <div class="hexagon"></div>
    <div class="hexagon"></div>
    <div class="hexagon"></div>
    <div class="hexagon"></div>
    <div class="hexagon"></div>
    <div class="hexagon"></div>
    <div class="hexagon"></div>
    <div class="hexagon"></div>
    <div class="hexagon"></div>
      </div>


  
      <div class="row">
      <div class="hexagon"></div>
    <div class="hexagon"></div>
    <div class="hexagon"></div>
    <div class="hexagon"></div>
    <div class="hexagon"></div>
    <div class="hexagon"></div>
    <div class="hexagon"></div>
    <div class="hexagon"></div>
    <div class="hexagon"></div>
    <div class="hexagon"></div>
    <div class="hexagon"></div>
    <div class="hexagon"></div>
    <div class="hexagon"></div>
      </div>
   
    </div>
  </body>
  </div>
  );
};

const mapActionsToProps = (dispatch) => {
  return {
    saveUsername: username => dispatch(setUsername(username))
  };
};

export default connect(null, mapActionsToProps)(LoginPage);
