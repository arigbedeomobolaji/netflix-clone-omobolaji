import React, {useRef, useState} from 'react'
import {Link} from "react-router-dom"
import "./Signin.css"

function Signin() {
  const passwordInput = useRef(null)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [remember, setRemember] = useState(false)
  const [recaptcha, setRecaptcha] = useState(false)
  const [emailFocus, setEmailFocus] = useState(false)
  const [passwordFocus, setPasswordFocus] = useState(false)
  const [emailError, setEmailError] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const [showPassword, setShowPassword] = useState(false)

  const handleBlur = (e) => {
    const {value, name} = e.currentTarget
    if(name === "email"){
      const emailRegex = new RegExp(/^([\w]+@[\w]+\.[\w]{1,10}||0[7-9)[0-1][\d]{9})$/g)
      if(value.trim() === "" || !emailRegex.test(value.trim())){
        setEmailError("Please enter a valid email or phone number.")
      }else{
        setEmailError("")
      }
      return
    }
    if(name === "password"){
      const passwordRegex = new RegExp(/^(?=.{8,60})(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[`~!@#$%^&*()_\-+=|\\:;"'<,>.?/]).*$/)
      if(value.trim() === "" || !passwordRegex.test(value.trim())){
        setPasswordError("Your password must contain between 4 and 60 characters, Uppercase,lowercase, number and symbol")
      }else{
        setPasswordError("")
      }
    }
  }

  const handleRecaptcha = () => {
    setRecaptcha(true)
  }

  const handleShowPassword = () => {
    setShowPassword(!showPassword)
    passwordInput.current.type = showPassword ? "password": "text"
  }

  return (
    <div className="signin" style={{
      background: `url(imgs/landing.jpg) no-repeat center center/cover`
    }}>
      <div className="signin__container">
        <h1 className="signin__title">Signin</h1>
        <div className={`form__group ${emailError && "form__group-error"}`}>
        <div 
          className={`form__placeholder ${emailFocus && "form__placeholder-active"}`}
        >Email Address or Phone Number</div>
          <input 
            className={`form__input ${emailError && "form__input-error"}`}
            type="text"
            name="email"
            autoComplete="off"
            placeholder="Email address or Phone Number"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={(e) => setEmailFocus(true)}
            onBlur={(e) => handleBlur(e)}
          />
        </div>
        {emailError && <p className="error">{emailError}</p>}
        <div className={`form__group ${passwordError && "form__group-error"}`}>
        <div 
            className={`form__placeholder ${passwordFocus && "form__placeholder-active"}`}
            >Password</div>
          <input 
            className={`form__input ${passwordError && "form__input-error"}`}
            ref={passwordInput}
            type="password"
            name="password"
            autoComplete="off"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onFocus={(e) => setPasswordFocus(true)}
            onBlur={(e) => handleBlur(e)}
          />
          <i 
            className={`show-icon fa ${showPassword ? "fa-eye": "fa-eye-slash"}`}
            aria-hidden="true"
            onClick={handleShowPassword}
            ></i>
        </div>
        {passwordError && <p className="error">{passwordError}</p>}
        <div className="form__group">
          <button type="button" className="form__input form__input--button">Sign in</button>
        </div>
      <div className="form__group">
          <div className="row">
            <div className="remember">
              <div className="form__checkbox-container">
                <input 
                  className="form__checkbox"
                  type="checkbox"
                  value={remember}
                  name="rememberMe"
                  id="remember"
                  onChange={() => setRemember(!remember)}
                />
                {remember && <i className="fa fa-check form__checkbox-icon" aria-hidden="true"></i>} 
              </div>
              <label className="form__label" htmlFor="remember">Remember me</label>
            </div>
            <Link className="form__help" to="#">Need Help?</Link>
          </div>
        </div>
        <div className="signin__facebook">
          <img 
            className="signin__fb-img"
            src="imgs/FB-f-Logo__blue_57.png"
            alt="fb_logo"
          />
          <Link className="signin__fb-title" to="#">Login with facebook</Link>
        </div>
        <div className="signin__new">
          <span className="signin__new-question">New to Netflix?</span>
          <Link className="signin__new-signup" to="/">Sign up now</Link>
        </div>
        <div className="signin__recaptcha">
          <p className="signin__recaptcha-title">
            This page is protected by Google reCAPTCHA to ensure you're not a bot.
            {
              recaptcha ? false : (
              <span className="signin__learn-more" onClick={handleRecaptcha}>
              Learn more
            </span>)}
          </p>
          {
            recaptcha && <p className="signin__recaptcha-title">
            The information collected by Google reCAPTCHA is subject to the Google <Link className="signin__learn-more" to="https://policies.google.com/privacy">Privacy Policy</Link> and <Link className="signin__learn-more" to="https://policies.google.com/terms">Terms of Service</Link>, and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes (it is not used for personalized advertising by Google).
            </p>
          }
        </div>
      </div>
      </div>
  )
}

export default Signin
