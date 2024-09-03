//components
import { NavLink, Outlet } from "react-router-dom"


export default function HomeNavBar() {
    return(
        <div className="home-layout">
            <header>
                <nav>
                    <h1>Livenghtston</h1>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='resume'>Resume</NavLink>
                    <NavLink to='projects'>Projects</NavLink>
                    <NavLink to='contact'>Contact</NavLink>
                    <NavLink to='about'>About</NavLink>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
}