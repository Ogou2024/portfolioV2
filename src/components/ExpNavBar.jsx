import { NavLink, Outlet } from "react-router-dom"

export default function ExpNavBar() {
  return (
    <div className="education-layout">

      <h2>Experience Pages</h2>
      <p>Some things cannot be taught; they must be experienced. You never learn the most valuable lessons in life 
        until you go through your own journey.' – Roy T. Bennett<br></br>
        Each button below will explain in details different areas of my experience.</p>

      <nav>
        <NavLink to="developer">Web Developer</NavLink>
        <NavLink to="instructor">Instructor</NavLink>
        <NavLink to="engineer">Engineer</NavLink>
      </nav>

      <Outlet />

    </div>
  )
}