import React, { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import Logo from "../../assets/header/Logo.svg"
import Menu from "../../assets/header/Menu_icon.svg"
import pencil from "../../assets/header/pencil.svg"
import './header.css'
export const Headermob = () => {

    const nav=[
        {
            title: "Home",
            to:"/"
        },
        {
            title: "Why us",
            to:"/whyus"
        },
        {
            title: "Our kids",
            to:"/ourkids"
        },
        {
            title: "Engage",
            to:"/engage"
        },
    ]
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
            <div className="hm">
                <ul>
                    {nav.map(e=>(
                   Navoptions(e)
                    ))}
                </ul>
            </div>
            <div className="hmbr">
                <button>Donate</button>
            </div>
           
        </div>
    )
}

const Navoptions =(e)=>{
    const isActive = useLocation()
    console.log(isActive)
    return (
        <li key={e.title}>
        <NavLink to={e.to}>{e.title}</NavLink>
        {(isActive.pathname===e.to) && <img src={pencil} alt="" />}
    </li>
    )
}
