import React from 'react'
import temp from '../../assets/temp_home_img.png'
import dem from '../../assets/a2dem.png'
import './home.css'
import { a1 } from './constants'

export const Home = () => {
    return (
        <div className="home_cnt">
            <div>
                <h1> We are an <span style={{color:'#FFC046'}}>Orphanage</span> striving to <br /> shape young mind for <br /> excellence.</h1>
                <img src={temp} alt="" />
            </div>
            <div id="a1">
                {a1.map(e=>(
                <div key={e.desc}>
                    <span>
                    <img src={e.icon} alt="" />
                    <h6>{e.no}</h6>
                    </span>
                    <p>{e.desc}</p>
                </div>
                ))}
            </div>    
            <Knowmore/>
            <Knowmore/>
        </div>

    )
}

const Knowmore= () => {
    return(
        <div id="a2">
            <h4>Why is Prerna different?</h4>
            <img src={dem} alt="" />
            <p>Prerna aims to provide children with the best care and facilities they deserve.</p>
            <a href="hgh">Know more</a>
        </div>
    )
}
