

import { NavLink, Outlet } from "react-router-dom"

export default function LingNavBar() {
  return (
    <div className="education-layout">

      <h2>Linguistics Pages</h2>
      <p>"A language is not just words. It's a culture, a tradition, a unification of a community, a whole history 
        that creates what a community is. It's all embodied in a language." - Noam Chomsky<br></br>
        Each button below will explain in detail my journey in those languages.</p>

      <nav>
        <NavLink to="Haitian">Ayisyen</NavLink>
        <NavLink to="English">English</NavLink>
        <NavLink to="Portuguese">Português</NavLink>
        <NavLink to="Spanish">Español</NavLink>
        <NavLink to="French">Français</NavLink>
        <NavLink to="Russian">Русский</NavLink>
      </nav>

      <Outlet />

    </div>
  )
}