import React from 'react';
import style from "./HomeText.module.css";
const HOME_TEXT  = () =>{
    return(
        <div className={style.container}>
            <div className={style.subText}>
                Hi, There
            </div>
            <div className={style.text}>
                I'm <span className={style.name}>Siddhant Gupta</span>
            </div>
            <div className={style.para}>
                Full Stack Developer
            </div>
            <div className={style.resumeBtn}>
                ||Btn||
            </div>
        </div>
    );
}
export default HOME_TEXT;