import React from 'react';
import style from "./Certificates.module.css";
const CERTIFICATES  = () =>{
    return(
        <div className={style.container}>
            <div className={style.heading}>
                Certificates
            </div>
            <div className={style.displayContainer}></div>
        </div>
    );
}
export default CERTIFICATES;