import React from 'react'
import Logo from '../../images/icons8-sos-or-emergency-phone-no-layout-with-hand-receiver-96.png'

const NavMenu = () => {

  return (
    <div className="flex flex-row border border-b-blue-500 justify-between">
      <div className="h-full">
        <button className="bg-sky-500 rounded w-full my-1">
          First left button
        </button>
        <button className="bg-sky-500 rounded w-full my-1">
          Second left button
        </button>
        <button className="bg-sky-500 rounded w-full my-1">
          Third left button
        </button>
      </div>
      <img src={Logo}  alt={'Logo'}/>
      <div className="h-full">
        <button className="bg-sky-500 rounded w-full my-1">
          First right button
        </button>
        <button className="bg-sky-500 rounded w-full my-1">
          Second right button
        </button>
        <button className="bg-sky-500 rounded w-full my-1">
          Third right button
        </button>
      </div>
    </div>
  )
}

export default NavMenu;
