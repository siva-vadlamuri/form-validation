import React, { Component } from 'react'
import NavBar from './NavBar'

export class Header extends Component {
    render() {
        return (
            <div>

<nav className="navbar navbar-expand-lg navbar-dark bg-dark text-white">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Logo</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
     <NavBar/>
  </div>
</nav>
                
            </div>
        )
    }
}

export default Header
