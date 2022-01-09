import React from 'react'
import logo from '../../assets/Logo_white.svg'
import fb from '../../assets/fb.svg'
import insta from '../../assets/insta.svg'
import linkdin from '../../assets/linkdin.svg'
import youtube from '../../assets/youtube.svg'
import map from '../../assets/map.svg'
import Message from '../../assets/Message.svg'
import WhatsApp from '../../assets/WhatsApp.svg'
import './footer.css'

export const Footermob = () => {
    return (
        <div className="footermob_cnt">
            <img src={logo} alt="" />
            <h3>Prerna Children's Home</h3>
            <ul>
                <li><a href="#">Why Us</a></li>
                <li><a href="#">Our Kids</a></li>
                <li><a href="#">Engage</a></li>
                <li><a href="#">Donate</a></li>
            </ul>
            <div>
                <img src={fb} alt="" />
                <img src={insta} alt="" />
                <img src={linkdin} alt="" />
                <img src={youtube} alt="" />

            </div>

            <h3>Address</h3>
            <span id='address'>
                <img src={map} alt="" />
                <p>Prerna Children's home,
                   Gopi Gopal Deva Nilayam,
                   Dwarakamayi Colony, 
                   Behind IDPL Colony, Bowenpally, 
                   Balanagar Mandal,
                   Hyderabad City, Telangana State, India. 500037
                </p>

            </span>

            <h3>Contact Us</h3>
            <ul style={{width: '95%'}}>
                <li style={{display: 'flex' , alignItems: 'center',textDecoration:"underline"}}>
                    <img src={WhatsApp} alt="" style={{height:'28px',width:'28.67px',marginRight:"16px"}}/>
                    <p>+91 94419 22022</p>
                </li>
                <li style={{display: 'flex' , alignItems: 'center',textDecoration:"underline"}} >
                    <img src={Message} alt="" style={{height:'28px',width:'28.67px',marginRight:"16px"}}/>
                    <p>siri.nonprofit@gmail.com </p>
                </li>
            </ul>

            <pre>
                &copy; 2019-2021
                <br />
                Prerna Children's Home
                <br />
                All right reserved
            </pre>


        </div>
    )
}
