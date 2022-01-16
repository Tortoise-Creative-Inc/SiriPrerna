import React from 'react';
import Logo from "../../assets/footer/Logo_white.svg";
import styles from "./Footer.module.scss"
import { ICONS, CONTACT, NAVLINKS } from "../../utility/Constants.js";
import Map from "../../assets/footer/map.svg";
import { Link } from 'react-router-dom';
import CopyrightIcon from '@mui/icons-material/Copyright';


const Footer = () => {
    return (
        <>
            <div className={styles.footer}>
                <div className={styles.footer_col_info}>
                    <div className={styles.Logo}>
                        <Link className={styles.Logolink} to="/Home"><img id={styles.Logo_img} src={Logo} alt="Logo" /> </Link>
                    </div>
                    <div className={styles.footer_col_info_Main}>
                        <h2 className={styles.heading}>Prerna Children’s Home</h2>
                        <div className={styles.nav}>
                            <ul className={styles.ul}>
                                {NAVLINKS.map((e) => (
                                    <li className={styles.li} key={e.title}><Link className={styles.Link} to={e.to} alt=""><h4 className={styles.Title}>{e.title}</h4></Link></li>
                                ))}
                            </ul>
                        </div>
                        <div className={styles.logos}>
                            {ICONS.map((x, index) => (
                                <Link key={index} className={styles.Link_logo} to={x.to}><img className={styles.img} src={x.Icon} alt={x.alt} /></Link>
                            ))}
                        </div>
                    </div>
                </div>
                <div className={styles.footer_col}>
                    <div className={styles.address_body}>
                        <img className={styles.img} src={Map} alt="" />
                        <div className={styles.address}>
                            <h3 className={styles.footer_col_heading}>Address</h3>
                            <p className={styles.p}>
                                Prerna Children's home, Gopi Gopal Deva Nilayam, Dwarakamayi Colony,
                                Behind IDPL Colony, Bowenpally, Balanagar Mandal, Hyderabad City,
                                Telangana State, India. 500037
                            </p>
                        </div>
                    </div>
                    <div className={styles.copyright}>
                        <CopyrightIcon id={styles.copy} /> <p className={styles.pre}>2019-2021 Prerna Children’s Home. All rights reserved.</p>
                    </div>
                </div>
                <div className={styles.footer_col}>
                    <h3 className={styles.footer_col_heading}>Contact Us</h3>
                    <ul className={styles.ul}>
                        {CONTACT.map(e => (
                            e.id !== 1 &&
                            (<li key={e.id} className={styles.li}>
                                <a className={styles.Link} href={e.to}>
                                    {e.Icon}<h4 className={styles.list_items}>{e.content}</h4></a>
                            </li>)
                        ))}
                    </ul>
                </div>

            </div>


        </>
    );
};

export default Footer;