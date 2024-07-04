import React from 'react'

const NavMenu = (props: any) => {

  return (
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <div className="row m-auto">
            <div className="text-light h2">{props.title}</div>
          </div>
        </div>
      </nav>
  )
}

export default NavMenu;
