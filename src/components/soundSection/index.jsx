import React from 'react'

const SoundSection = () => {
  const handleLearnMore = () => {
    const element = document.querySelector('.display-section')
    window.scrollTo({
      top: element?.getBoundingClientRect().bottom,
      left: 0,
      behavior: 'smooth',
    })
  }
  return (
    <div className="sound-section wrapper">
      <div className="body">
        <div className="sound-section-content content">
          <h2 className="title">New Sound System</h2>
          <p className="text">Feel The Base</p>
          <span className="description">
            {' '}
            From #50K/mo for 24 months or #600K before trade-in
          </span>
          <ul className="links">
            <li>
              <button className="button"> Buy</button>
            </li>
            <li>
              <a className="link" onClick={handleLearnMore}>
                Learn More
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SoundSection
