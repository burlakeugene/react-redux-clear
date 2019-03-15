import React from 'react'
import { NavLink } from 'react-router-dom'

const index = () => {
  return (
    <div>
      <div>
        <NavLink
          to={'/'}
          activeClassName="selected"
          >
          index
        </NavLink>
        <NavLink
          to={'/about'}
          activeClassName="selected"
          >
          about
        </NavLink>
      </div>
      About me
    </div>
  )
}

export default index
