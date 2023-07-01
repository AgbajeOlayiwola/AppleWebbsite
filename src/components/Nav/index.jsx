import React from 'react'
import Logo from '../../assets/images/logo.svg'
import Search from '../../assets/images/search.svg'
import Store from '../../assets/images/store.svg'

const Nav = () => {
  return (
    <nav className="nav-wrapper">
      <div className="nav-content">
        <ul className="list-styled">
          <li>
            <img src={Logo} alt="apple" />
          </li>
          <li>
            <a className="link-styled">Store</a>
          </li>
          <li>
            <a className="link-styled">Store</a>
          </li>
          <li>
            <a className="link-styled">Iphone</a>
          </li>
          <li>
            <a className="link-styled">Ipad</a>
          </li>
          <li>
            <a className="link-styled">Iwatch</a>
          </li>
          <li>
            <a className="link-styled">Accessories</a>
          </li>
          <li>
            <a className="link-styled">Lifestyle</a>
          </li>
          <li>
            <a className="link-styled">Support</a>
          </li>
          <li>
            <img src={Search} alt="search" />
          </li>
          <li>
            <img src={Store} alt="store" />
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav
