import { NavLink, Outlet } from "react-router-dom"

export default function EduNavBar() {
  return (
    <div className="education-layout">

      <h2>Education Pages</h2>
      <p>"Education is the most powerful weapon which you can use to change the world." - Nelson Mandela<br></br>
        Each button below will explain in details different areas of my education.</p>

      <nav>
        <NavLink to="ucf">UCF</NavLink>
        <NavLink to="puc">PUC</NavLink>
        <NavLink to="udemy">Udemy</NavLink>
      </nav>

      <Outlet />

    </div>
  )
}