import React,{useState} from 'react'
import Topbar from './WEBSITE/topbar/topbar'
import './index.scss'
import Home from './WEBSITE/home/home'
import Portfolio from './WEBSITE/portfolio/portfolio'
import About from './WEBSITE/About/about'
import Contact from './WEBSITE/contact/contact'
import Sidebar from './WEBSITE/sidebar/sidebar'

function App() {
const [open, setOpen] = useState(false);
const [eopen,esetOpen]= useState(false)
    return (
        <div className='app'>
         

            <Topbar open={open} setopen={setOpen}  eopen={eopen} 
 />

            <Sidebar open={open} setopen={setOpen}/>
            <div className='section'>

            <Home/>
            <About/>
            <Portfolio/>

            <Contact eopen={eopen} esetopen={esetOpen} />
            </div>
           
        </div>
    )
    }
    export default App;
