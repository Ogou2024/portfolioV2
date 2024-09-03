

import { NavLink, Outlet } from "react-router-dom"

export default function LeadNavBar() {
  return (
    <div className="education-layout">

      <h2>Leadership Pages</h2>
      <p>"Do not follow where the path may lead. Go instead where there is no path and leave a trail." -Ralph Waldo Emerson<br></br>
      Each button below will explain in details different areas of my leadership role.</p>

      <nav>
        <NavLink to="klakay">Konesans Lakay</NavLink>
        <NavLink to="tlakay">Tradisyon Lakay</NavLink>
        <NavLink to="ouve">Ouvè Je W Inc</NavLink>
        <NavLink to="salt">Salt Inc</NavLink>
      </nav>

      <Outlet />

    </div>
  )
}