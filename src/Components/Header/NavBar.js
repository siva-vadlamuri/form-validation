import React, { Component } from 'react'

export class NavBar extends Component {
     navLinks = ['Home','Contact','About'];
    render() {
        return (
            <div className="collapse navbar-collapse w-100 justify-content-end" id="navbarNav">
      <ul className="navbar-nav">
          {
              this.navLinks.map((link)=>(
              
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">{link}</a>
              </li>
               
            

              ))
          }
        
      </ul>
    </div>
        )
    }
}

export default NavBar
