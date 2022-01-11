import React, { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import Logo from "../../assets/header/Logo.svg"
import Menu from "../../assets/header/Menu_icon.svg"
import pencil from "../../assets/header/pencil.svg"
import whatsapp from "../../assets/header/WhatsApp.svg"
import Home from "../../assets/header/icons/Home.svg"
import Engage from "../../assets/header/icons/Engage.svg"
import Kids from "../../assets/header/icons/Kids.svg"
import Why from "../../assets/header/icons/Why.svg"

import './header.css'
import NavMobile from './NavMobile/NavMobile'
export const Headermob = () => {

    const nav=[
        {
            title: "Home",
            to:"/",
            delay:".20",
            icon:Home,
        },
        {
            title: "Why us",
            to:"/whyus",
            delay:".25",
            icon:Why
        },
        {
            title: "Our kids",
            to:"/ourkids",
            delay:".30",
            icon:Kids
        },
        {
            title: "Engage",
            to:"/engage",
            delay:".35",
            icon:Engage
        },
    ]
    return (
        <div className="headermob_cnt">
            <div className="hmbl">
                <NavMobile items={nav}/>
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
                <button>DONATE</button>
                <span>
                    <img src={whatsapp} alt="" />
                    <p>+91 94419 22022</p>
                </span>
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
