import React from 'react';
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';
import x from "./NavMobile.module.scss";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Navoption = (e, isMobile,closeMobileMenu) => {
    const animateFrom = { opacity: 0, x: -40 }
    const animateTo = { opacity: 1, x: 0 }
    return (
        <motion.li
            initial={animateFrom}
            animate={animateTo}
            transition={{ delay:e.delay}}
            key={e.title}
            className={x.li}>
            <Link className={x.Link}to={e.to} onClick={() => isMobile && closeMobileMenu()}><img className={x.img} src={e.icon} alt={e.title}/><span className={x.span}>{e.title}</span></Link>
        </motion.li>
    )
}

const Navlinks = ({ items,isMobile, closeMobileMenu }) => {
    const animateFrom = { opacity: 0, x: -100 }
    const animateTo = { opacity: 1, x: 0 }
    return (
        <motion.ul
        initial={animateFrom}
        animate={animateTo}
        transition={{delay:.05}} 
        className={x.ul}>
            {items.map(e => (Navoption(e, isMobile,closeMobileMenu)))}
        </motion.ul>
    )

}

export default Navlinks