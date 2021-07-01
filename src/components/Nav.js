import React from 'react'
import './nav.scss'

const Nav = ()=>{

      return (
  <>
        <nav className="nav-bar sticky">
          <div className="nav-bar-top d-flex">
            <div className="col-4" />
            <div className="col-4 d-flex justify-content-center">
              <a href>
                <h1>
                  <img className="nav-logo" src="./img/logo-s-dark.svg" alt="Lunar_Phase" />
                </h1>    
              </a>
            </div>
            <div className="nav-member-act col-4 d-flex justify-content-end mt-1">
              <div className>
                <p className="small">來賓 您好</p>
              </div>
              <div className="ml-2">
                <a className="mx-0" href><i className="fas fa-user" /></a>
                <div />
              </div>
              <div className="ml-2">
                <a className="mx-0" href><i className="fas fa-bookmark" /></a>
                <p className="small mx-0 mb-2">(0)</p>
              </div>
              <div className="ml-2">
                <a className="mx-0" href><i className="fas fa-shopping-cart" /></a>
                <p className="small mx-0 mb-2">(0)</p>
              </div>
            </div>
          </div>
          <div className="nav-bar-bottom">
            <ul className="d-flex justify-content-around col-11 mx-auto mt-1">
              <li><a href="#shop">SHOP</a></li>
              <li><a href="#article">ARTICLE</a></li>
              <li><a href="#order">ORDER</a></li>
              <li><a href="#event">EVENT</a></li>
              <li><a href="#join-us">JOIN US</a></li>
            </ul>
          </div>
        </nav>
      
</>
      )
}

  export default Nav