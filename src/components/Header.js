import React from 'react';
import { NavLink } from 'react-router-dom';


//links to the photos
const Header = (props) =>{

return(
    <nav className='main-nav'>
<ul >
<li>

 <NavLink to="/Dogs">Dogs</NavLink>
</li>
 <li>
<NavLink to="/Bears">Bears</NavLink>
</li>
<li>
<NavLink to="/Elephants">Elephants</NavLink>
</li>
<li>
<NavLink to="/Turtles">Turtles</NavLink>
</li>
<li>
<NavLink to="/Search">Search</NavLink>
</li>
</ul>
</nav>
);
}
export default Header;
