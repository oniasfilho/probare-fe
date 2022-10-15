import React from 'react'
import './loginScreen.css';

const LoginScreen = () => {
  return (
    <>
      <div className="upper-stroke"> </div>
      <div id="page-wrapper">
        <div className="left-area landing-page">
          <div className="greeting-message-area">
            <div className="logo-wrapper">
              <img className="logo" src="/static/logo-dark.png" alt="oniasfilho logo" />
            </div>
            <p id="greeting-title">Probare</p>
            <p id="greeting-subtitle">Sign in to start your session</p>
          </div>
        </div>
        <div id="right-area" className="landing-page">
          <div className="login-area">
            <div className="login-form">
              <div className="login-text-wrapper">
                <p className="login-text">Login</p>
              </div>
              <input type="text" />
              <input type="text" />
              <div className="lower-form">
                <div className="submit-button-wrapper">
                  <button id="submit-button" type="submit"> Sign In</button>
                </div>
                <div className="forgot-password-password">
                  <p className="forgot-password">forgot password</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginScreen