import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import x from "./NavMobile.module.scss"
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import Navlinks from './Navlinks';


const NavMobile = ({ items }) => {
    const [open, setOpen] = useState(false);
    const HamburgerIcon = <div className={open? x.MenuOpen :  x.Menu} onClick={() => setOpen(!open)}>
        <HorizontalRuleIcon id={x.Icon1} />
        <HorizontalRuleIcon id={x.Icon2} />
        <HorizontalRuleIcon id={x.Icon3} />
    </div>       
    const closeMobileMenu = () => setOpen(false);
    
    return (
        <nav className={x.MoblieNav}>
            {HamburgerIcon}
            {open && <Navlinks items={items} isMobile={true} closeMobileMenu={closeMobileMenu}  />}
        </nav>
    )


}
export default NavMobile