import React from 'react'
import { useSelector } from 'react-redux'
import {Link} from "react-router-dom"
function SignupPassword() {
  const saveEmail = useSelector(state => state.saveEmail)
  const {email}= saveEmail

  const handleFocus = (e) => {
    console.log("focus")
  }

  const handleBlur = (e) => {
    console.log("blur")
  }

  return (
    <div className="parent">
      <div className="container">
        <p className="steps">STEP 1 OF 3</p>
        <h1 className="title">Welcome back!</h1>
        <h1 className="title">Joining Netflix is easy.</h1>
        <p className="para">Enter your password and you will be watching in no time</p>
        <p className="label">Email</p>
        <p className="hard-code">{!!email && email}</p>
        <form>
          <div className="form__group">
            <input 
              type="password"
              placeholder="Enter your password"
              autoComplete="off"
              onFocus={(e) => handleFocus(e)}
              onBlur={(e) => handleBlur(e)}
            />
          </div>
          <Link to="#">Forgotten Password?</Link>
          <div className="form__group">
            <button type="button" className="btn btn-next">Next</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignupPassword
