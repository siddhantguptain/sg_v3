import React from 'react';
import style from "./AboutME.module.css";
const ABOUT_ME  = () =>{
    return(
        <div className={style.container}>
            <div className={style.heading}>
                About Me
            </div>
            <div className={style.paragraph}>
            A highly innovative individual with a keen interest in developing and deploying new projects on World Wide Web Ability to integrate market needs into technical solutions. Looking to begin a career as an entry-level software developer with a reputable company that is focused on innovation.
            </div>
        </div>
    );
}
export default ABOUT_ME;
