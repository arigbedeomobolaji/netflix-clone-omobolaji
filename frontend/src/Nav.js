// jshint ignore: start
import React, {useEffect, useState} from "react"
import {Link} from "react-router-dom"
import "./Nav.css"

const Nav = () => {
  const [show, setShow] = useState(false)

  useEffect(() => {

    const handleScroll = () => {
      if(window.scrollY > 100){
        setShow(true)
      }else{
        setShow(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__logo">
        <Link to="/"><img 
          className="nav__img"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png"
          alt="Netfelix"
        /></Link>
      </div>
      <div className="nav__links"> 
          <Link to="/movies" className="nav__link">Movies</Link>
          <Link to="/login" className="nav__link">Sign in</Link>
      </div>

    </div>
  )
}

export default Nav