import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { saveEmailAction } from '../actions/signupActions'
import data from "../data"
import "./Home.css"

function Home(props) {
  const dispatch = useDispatch()
  const [email, setEmail] = useState("")
  const [, setIndex] = useState(undefined)
  const [tracker, setTracker] = useState(false)
  const [showItems, setShowItems] = useState([])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleClick = (index) => {
    console.log(index, showItems[index])
    for(let i = 0; i < data.length; i++){
      if(i !== index){
        showItems[i] = false
      }else{
        showItems[i] = !showItems[index]
      }
    }
    setShowItems(showItems)
    setIndex(index)
    setTracker(showItems[index])
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(saveEmailAction(email))
    console.log(props.location)
    props.history.push("/signup/password")
  }

  return (
    <div className="home">
    {/* Landing Page */}
      <div className="landing" style={{
        background: `url(imgs/landing.jpg) no-repeat center center/cover`
      }}>
        <div className="landing__content">
          <h1 className="landing__title">Unlimited movies, TV shows, and more.</h1>
          <h3 className="landing__subtitle">Watch anywhere. Cancel anytime</h3>
          <p className="landing__para">Ready to watch? Enter your email to create or restart your membership</p>
          <form 
            className="landing__form"
             onSubmit={(e) => handleSubmit(e)}
          >
          <input 
            className="landing__input"
            type="email"
            value={email}
            placeholder="Email Address"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button 
            className="landing__button"
            >Get Started <i class="fa fa-chevron-right" aria-hidden="true"></i></button>
          </form>
        </div>
      </div>
      {/* Watch */}
      <div className="story-card watch">
        <div className="story-card__container">
          <div className="watch__content">
            <h1 className="story-card__title">Enjoy on your TV.</h1>
            <h3 className="story-card__subtitle">Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h3>
          </div>
          <div className="watch__img-container">
            <div className="watch__animation-container">
                <img className="watch__image" src="imgs/tv.png" alt="television" />
                <div className="watch__video-container">
                    <video className="watch__video" src="media/tv.mp4" autoPlay playsInline muted loop>Sorry File format not supported</video>
                </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Watch */}
      {/* Download */}
      <div className="download">
        <div className="download__container">
          <div className="download__media">
            <img className="download__media-image" src="imgs/mobile-0819.jpg" alt="Mobile Img" />
            <div className="download__img-container">
              <div className="download__image-wrapper">
                <img className="download__image" src="imgs/stranger_things.png" alt="stranger things" />
                <div className="download__description">
                  <h3 className="download__img-title">Stranger things</h3>
                  <p className="download__img-subtitle">Downloading...</p>

              </div>
              </div>
              <img className="download__download-icon" src="imgs/download-icon.gif" alt="download icon" />
            </div>
          </div>
          <div className="download__text">
            <h1 className="download__title">Download your shows to watch offline.</h1>
            <h3 className="download__subtitle">Save your favorites easily and always have something to watch.</h3>
          </div>
        </div>
      </div>
      {/* End Download */}

      {/* Watch Everywhere */}
      <div className="everywhere">
        <div className="everywhere__container">
          <h1 className="everywhere__title">Watch everywhere.</h1>
          <h3 className="everywhere__subtitle">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</h3>
        </div>
      </div>
      {/* End Watch Everywhere */}
      {/* Kids */}
      <div className="kids">
        <div className="kids__container">
          <div className="kids__image-container">
            <img className="kids__image" src="imgs/kids.png" alt="kids" />
          </div>
          <div className="kids__text">
            <h1 className="kids__title">Create profiles for kids.</h1>
            <h3 className="kids__subtitle">Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</h3>
          </div>
        </div>
      </div>
      {/* End kids */}
      {/* questions */}
      <div className="questions">
        <div className="questions__container">
          <h1 className="questions__title">Frequently Asked Questions</h1>
          <div className="question__wrapper">
            {
              data.map(({question, answer, index: innerIndex}) => {
                return (
                  <div className="question" key={innerIndex}>
                    <button className="question__question" type="button" onClick={() => handleClick(innerIndex)}>
                      {question}
                      <div className="question__icon">{tracker && showItems[innerIndex] ? "x" : "+"}</div>
                    </button>
                    {
                      showItems[innerIndex] && tracker && (
                        <div className="question__answer">
                      {answer.map((answer) => {
                        return (
                          <p className="question__description" key={answer}>{answer}</p>
                        )
                      })}
                      </div>
                      )
                    }
                  </div>
                )
              })
            }
          </div>
          <div className="get-started">
            <p className="get-started__para">Ready to watch? Enter your email to create or restart your membership</p>
            <form 
              className="get-started__form"
              onSubmit={(e) => handleSubmit(e)}
              >
              <input 
                className="get-started__input"
                type="email"
                value={email}
                placeholder="Email Address"
                onChange={(e) => setEmail(e.target.value)}
              />
              <button 
                className="get-started__button"
                type="submit"
              >Get Started <i class="fa fa-chevron-right" aria-hidden="true"></i></button>
            </form>
          </div>
        </div>
      </div>
      {/* End Questions */}
    </div>
  )
}

export default Home
