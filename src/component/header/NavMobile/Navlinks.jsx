import React from 'react';
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';
import styles from "./NavMobile.module.scss";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Logo from "../../../assets/header/Logo.svg"

const Contact = [
    {
        title: "Phone No.",
        content: "+91 94419 22022",
        icon: <LocalPhoneIcon />,
        delay: ".18",
    },
    {
        title: "WhatsApp No.",
        content: "+91 94419 22022",
        icon: <WhatsAppIcon />,
        delay: ".20",

    },
    {
        title: "Mail",
        content: "siri.nonprofit@gmail.com ",
        icon: <MailOutlineIcon />,
        delay: ".22",
    }
];

const Navoption = (e, isMobile, closeMobileMenu) => {
    const animateFrom = { opacity: 0, x: -100 }
    const animateTo = { opacity: 1, x: 0 }
    return (
        <motion.li
            initial={animateFrom}
            animate={animateTo}
            transition={{ delay: e.delay }}
            key={e.title}
            className={styles.li}>
            <Link className={styles.Link} to={e.to} onClick={() => isMobile && closeMobileMenu()}><img className={styles.img} src={e.icon} alt={e.title} /><span className={styles.span}>{e.title}</span></Link>
        </motion.li>
    )
}

const Navlinks = ({ items, isMobile, closeMobileMenu }) => {
    const animateFrom = { opacity: 0, x: -100 }
    const animateTo = { opacity: 1, x: 0 }
    return (

        < >
          <motion.div
                initial={animateFrom}
                animate={animateTo}
                transition={{ delay: .05 }}
                className={styles.HamMenu}>
                <ul className={styles.ul}>
                    {items.map(e => (Navoption(e, isMobile, closeMobileMenu)))}
                </ul>
                <ul className={styles.ulContact}>
                    {Contact.map((x, index) => (
                        <motion.li
                            initial={animateFrom}
                            animate={animateTo}
                            transition={{ delay: x.delay }}
                            className={styles.li} key={index}>
                            <div className={styles.Contact}>{x.icon}<span className={styles.span}>{x.content}</span></div>
                        </motion.li>
                    ))}
                    <Link className={styles.logolink} to="/"><motion.img
                        initial={animateFrom}
                     animate={animateTo}
                        transition={{ delay: .24 }}
                        id={styles.logo} src={Logo} alt="Logo" /><motion.span
                            initial={animateFrom}
                            animate={animateTo}
                            transition={{ delay:.24 }}
                            className={styles.spanlogo}> Prerna Children’s Home </motion.span></Link>
                </ul>
            </motion.div>
           
        </>
    )


}

export default Navlinks