import React from 'react';
import { NavLink } from 'react-router-dom';


//links to the photos
const Header = (props) =>{

return(
    <nav className='main-nav'>
<ul >
<li>

 <NavLink to="/Dogs">Cats</NavLink>
</li>
 <li>
<NavLink to="/Bears">Dogs</NavLink>
</li>
<li>
<NavLink to="/Elephants">Monkeys</NavLink>
</li>
<li>
<NavLink to="/Turtles">Elephants</NavLink>
</li>
<li>
<NavLink to="/Search">Search</NavLink>
</li>
</ul>
</nav>
);
}
export default Header;
