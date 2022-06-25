import React, { useState } from 'react';
import x from "./NavMobile.module.scss"
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import Navlinks from './Navlinks';


const NavMobile = () => {
    const [open, setOpen] = useState(false);
    const HamburgerIcon = <div className={open? x.MenuOpen :  x.Menu} onClick={() => setOpen(!open)}>
        <HorizontalRuleIcon id={x.Icon1} />
        <HorizontalRuleIcon id={x.Icon2} />
        <HorizontalRuleIcon id={x.Icon3} />
    </div>       
    const closeMobileMenu = () => setOpen(false);
    
    return (
        <>
        <div className={open?x.navopen:x.underlay} onClick={closeMobileMenu}  ></div>
        <nav className={x.MoblieNav} >
            {HamburgerIcon}
             <Navlinks isMobile={true} closeMobileMenu={closeMobileMenu} Open={open}  />
        </nav>
        </>
    )


}
export default NavMobile