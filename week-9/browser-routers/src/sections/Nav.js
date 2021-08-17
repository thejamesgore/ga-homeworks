import React from 'react'
import { Link } from 'react-router-dom'



const Nav = () => {
    return (
     <nav>
         <ul>
             <li> 
                 <Link to="/buzzwords">Buzzwords</Link>
             </li>
             <li>
                 <Link to="/nats">Nats</Link>
             </li>
             <li>
                 <Link to="/profile">Profile</Link>
             </li>
         </ul>
     </nav>   
    )
}


export default Nav

