import React from 'react'
import Iphone from '../../assets/images/iphone-14.jpg'
import holdingIphone from '../../assets/images/iphone-hand.png'

const Jumbotron = () => {
  const handleLearnMore = () => {
    const element = document.querySelector('.sound-section')
    window.scrollTo({
      top: element?.getBoundingClientRect().top,
      left: 0,
      behavior: 'smooth',
    })
  }
  return (
    <div className="jumbotron-section wrapper">
      <h2 className="title">New</h2>
      <img src={Iphone} className="logo" alt="iphone13pro" />
      <p className="text">Big and Bigger</p>
      <span className="description">
        From #50,000/mo for 24 months or #600,000 before trade-in
      </span>
      <ul className="links">
        <li>
          <button className="button">Buy Now</button>
        </li>
        <li>
          <a onClick={handleLearnMore} className="link">
            Learn More
          </a>
        </li>
      </ul>
      <img className="iphone-img" src={holdingIphone} alt="holdingIphone" />
    </div>
  )
}

export default Jumbotron
