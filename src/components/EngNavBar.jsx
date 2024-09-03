

import { NavLink, Outlet } from "react-router-dom"

export default function EngNavBar() {
  return (
    <div className="education-layout">

      <h2>Engineering Pages</h2>
      <p>"The scientist makes the discovery but it is the engineer who discover a use for it." – Ogou<br></br>
      Each button below will explain in details of their unique use within my experience.</p>

      <nav>
        <NavLink to="design">Circuit Design</NavLink>
        <NavLink to="cad">Cad</NavLink>        
      </nav>

      <Outlet />

    </div>
  )
}