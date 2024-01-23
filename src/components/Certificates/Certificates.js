import React from 'react';
import style from "./Certificates.module.css";

import MERN from "../../Assets/MERN.png";
import REACTJS from "../../Assets/REACTJS.png";
import JS from "../../Assets/JS.png";
import WEBDEV from "../../Assets/WEBDEV.png";

const CertificatesDATA =[
    {
        src:MERN,
        title:"The MERN FullStack Guide",
    },
    {
        src:REACTJS,
        title:"React - The Complete Guide",
    },
    {
        src:JS,
        title:"JavaScript - Zero to Expert!",
    },
    {
        src:WEBDEV,
        title:"Web Development BootCamp",
    },
] ;

const CERTIFICATES  = () =>{
    return(
        <div className={style.container}>
            <div className={style.heading}>
                Certificates
            </div>
            <div className={style.displayContainer}>
                    <img src={JS} />
            </div>
        </div>
    );
}
export default CERTIFICATES;