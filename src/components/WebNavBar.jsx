

import { NavLink, Outlet } from "react-router-dom"

export default function WebNavBar() {
  return (
    <div className="education-layout">

      <h2>Web Developer Pages</h2>
      <p>“Great web design without functionality is like a sports car with no engine.” -Paul Cookson<br></br>
        Each button below will explain in details of unique ways that I have used those tools to create the best 
        functionality in the websites' projects created for my clients.</p>

      <nav>
        <NavLink to="myreact">React</NavLink>
        <NavLink to="myjava">Javascript</NavLink>
        <NavLink to="myhtml">HTML</NavLink>
        <NavLink to="mycss">CSS</NavLink>
        <NavLink to="mypython">Python</NavLink>
      </nav>

      <Outlet />

    </div>
  )
}