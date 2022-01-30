import React from 'react';
import WhyUs1 from './WhyUs1/WhyUs1';
import WhyUs2 from './WhyUs2/WhyUs2';
import WhyUs3 from './WhyUs3/WhyUs3';
import styles from "./WhyUs.module.css"


const WhyUs = ({ismobile}) => {
    return (
        <>
        <h1 id={styles.Heading}>Why is Prerna Different?</h1>
        <WhyUs1 isMOBILE={ismobile} />
        <WhyUs2 isMOBILE={ismobile}/>
        <WhyUs3 isMOBILE={ismobile}/>
            
        </>
    );
};

export default WhyUs;