// components
import {RouterProvider, Route, createBrowserRouter,createRoutesFromElements} from "react-router-dom"



// pages
import Home from "./homePages/Home"
import About from "./homePages/About"
import Resume from "./homePages/Resume"
import Projects from "./homePages/Projects"
import Contact from "./homePages/Contact"
import Ucf from "./educationPages/Ucf"
import Puc from "./educationPages/Puc"
import Udemy from "./educationPages/Udemy"
import WebDev from "./experiencePages/WebDev"
import Instructor from "./experiencePages/Instructor"
import Engineer from "./experiencePages/Engineer"
import Klakay from "./leadershipPages/Klakay"
import Tlakay from "./leadershipPages/Tlakay"
import Ouve from "./leadershipPages/Ouve"
import Salt from "./leadershipPages/Salt"
import MyReact from "./webPages/MyReact"
import MyJava from "./webPages/MyJava"
import MyHtml from "./webPages/MyHtml"
import MyCss from "./webPages/MyCss"
import MyPython from "./webPages/MyPython"
import English from "./linguisticsPages/English"
import French from "./linguisticsPages/French"
import Haitian from "./linguisticsPages/Haitian"
import Portuguese from "./linguisticsPages/Portuguese"
import Russian from "./linguisticsPages/Russian"
import Spanish from "./linguisticsPages/Spanish"
import Design from "./engineeringPages/Design"
import Cad from "./engineeringPages/Cad"
import NotFound from "./pageX/NotFound"


//layouts
import HomeNavBar from "./components/HomeNavBar"
import EduNavBar from "./components/EduNavBar"
import ExpNavBar from "./components/ExpNavBar"
import LeadNavBar from "./components/LeadNavBar"
import WebNavBar from "./components/WebNavBar"
import LingNavBar from "./components/LingNavBar"
import EngNavBar from "./components/EngNavBar"


// Set up the routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<HomeNavBar />}>
      <Route index element={<Home />} />
      <Route path='resume' element={<Resume />} />
      <Route path='projects' element={<Projects />} />
      <Route path='contact' element={<Contact />} />
      <Route path='about' element={<About />} />
      <Route path='education' element={<EduNavBar />}>
        <Route path='ucf' element={<Ucf />} />
        <Route path='puc' element={<Puc />} />
        <Route path='udemy' element={<Udemy />} />
      </Route>
      <Route path='experience' element={<ExpNavBar />}>
        <Route path='developer' element={<WebDev />} />
        <Route path='instructor' element={<Instructor />} />
        <Route path='engineer' element={<Engineer />} />
      </Route>
      <Route path='leadership' element={<LeadNavBar />}>
        <Route path='klakay' element={<Klakay />} />
        <Route path='tlakay' element={<Tlakay />} />
        <Route path='ouve' element={<Ouve />} />
        <Route path='salt' element={<Salt />} />
      </Route>
      <Route path='website' element={<WebNavBar />}>
        <Route path='mycss' element={<MyCss />} />
        <Route path='myjava' element={<MyJava />} />
        <Route path='myhtml' element={<MyHtml />} />
        <Route path='mypython' element={<MyPython />} />
        <Route path='myreact' element={<MyReact />} />
      </Route>
      <Route path='languages' element={<LingNavBar />}>
        <Route path='English' element={<English />} />
        <Route path='French' element={<French />} />
        <Route path='Haitian' element={<Haitian />} />
        <Route path='Portuguese' element={<Portuguese />} />
        <Route path='Russian' element={<Russian />} />
        <Route path='Spanish' element={<Spanish />} />
      </Route>
      <Route path='engineering' element={<EngNavBar />}>
        <Route path='design' element={<Design />} />
        <Route path='cad' element={<Cad />} />
      </Route>

      <Route path="*" element={<NotFound />} />      
    </Route>
  )
)

// App function
export default function App() {return (<RouterProvider router={router} />);}
