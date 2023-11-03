
import React from 'react'
import './topbar.scss'
function Topbar({open,setopen}) {
    return (
        <div className='topbar'>
    
            <ul  className={'humberg ' + (open && 'active')} onClick={()=>setopen(!open)}>
                <span className='s1'></span>
                <span className='s2'></span>
                <span className='s3'></span>
            </ul>
               
              <a href='https://www.linkedin.com/in/amponsah-denis-boahen/'>linkedIn</a>
              <a href='https://github.com/Amponsah-Boahen-Denis?tab=overview&from=2023-11-01&to=2023-11-01'>Github</a>
                
            
        </div>
    )
}

export default Topbar;
