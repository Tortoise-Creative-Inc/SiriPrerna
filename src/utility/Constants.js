import Fb from '../assets/footer/fb.svg'
import Insta from '../assets/footer/insta.svg'
import Linkedin from '../assets/footer/linkdin.svg'
import Youtube from '../assets/footer/youtube.svg'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import React from 'react';

export const NAVLINKS = [
    {
        title: "Why Us",
        to: "/whyus",
    },
    {
        title: "Our Kids",
        to: "/ourkids"
    },
    {
        title: "Engage",
        to: "/engage",
    },
    {
        title: "Donate",
        to: "https://payu.in/pay/4C3C214032599EAC6E35E8BCADBD7A53",
        link:true,
    },
]

export const ICONS= [
    {
        name: "Facebook",
        Icon: Fb,
        alt: "Facebook",
        to: "",
    },
    {
        name: "Instagram",
        Icon: Insta,
        alt: "Instagram",
        to: "",
    },
    {
        name: "LinkedIn",
        Icon: Linkedin,
        alt: "LinkedIn",
        to: "",
    },
    {
        name: "Youtube",
        Icon: Youtube,
        alt: "Youtube",
        to: "",
    },

]




export const CONTACT = [
    {
        id: 1,
        title: "Phone No.",
        content: "+91 94419 22022",
        Icon: <LocalPhoneIcon/>,
        to: "tel:9441922022",
        delay: ".18",
    },
    {
        id: 2,
        title: "WhatsApp No.",
        content: "+91 94419 22022",
        Icon: <WhatsAppIcon />,
        to: "https://wa.me/9441922022",
        delay: ".20",

    },
    {
        id: 3,
        title: "Mail",
        content: "siri.nonprofit@gmail.com ",
        Icon: <MailOutlineIcon />,
        delay: ".22",
        to: "mailto:siri.nonprofit@gmail.com"
    }
];
