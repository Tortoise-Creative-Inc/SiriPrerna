import React from 'react'
import Logo from "../../assets/header/Logo.svg"
import Menu from "../../assets/header/Menu_icon.svg"
import './header.css'
export const Headermob = () => {
    return (
        <div className="headermob_cnt">
            <div className="hmbl">
                <img src={Menu} alt="" />
            <div className="hlogo">
            <img src={Logo} alt="" />
            <span>
                <p>Prerna</p>
                <p>Children's</p>
                <p>Home</p>
            </span>
            </div>
            </div>
            <div className="hmbr">
                <button>Donate</button>
            </div>
           
        </div>
    )
}
