import React from 'react';
import style from "./Footer.module.css";
const FOOTER  = () =>{
    return(
        <div className={style.container}>
            <h3 className={style.Head}>Siddhant Gupta</h3>
            <h4 className={style.mail}>me@siddhantgupta.in</h4>
            <div className={style.navItems}>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Certification</li>
                    <li>Project</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className={style.CC}> © 2024 Designed and Build by SiddhantGupta</div>


            

        </div>
    );
}
export default FOOTER;