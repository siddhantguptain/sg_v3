import React , {useState} from 'react';
import style from "./Certificates.module.css";

import MERN from "../../Assets/MERN.png";
import REACTJS from "../../Assets/REACTJS.png";
import JS from "../../Assets/JS.png";
import WEBDEV from "../../Assets/WEBDEV.png";

// const TempData = [
//     "a",
//     "b",
//     "c"
// ]


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

function CertificatesItems ({index, src , title , updateActiveCertificate, }){

    return (<div className={style.wrapper}>
        <div />
            <div className={style.items}>

            <div className={style.info}>
                 <h1 className={style.title}>{title}</h1>
            </div>
            <div className={style.certificate}>
                 <img  className={style.certificateIMG} src={src} alt={title} />
                 <div/>
            </div>
            </div>
    </div>);
}

const CERTIFICATES  = () =>{
    const [activeCertificate, setActiveCertificate] = useState(1);
    return(
        <div className={style.container}>
            <div className={style.heading}>
                Certificates
            </div>
            <div className={style.displayContainer}>
                <div className={style.slideContainer}>
                <div className={style.counters}>
                    <span>{activeCertificate}</span>
                    <span className={style.divider} />
                    <span>{CertificatesDATA.length}</span>
                </div>

                {CertificatesDATA.map((cer , index) => (
                    <CertificatesItems
                        key={cer.src}
                        index={index}
                        {...cer}  
                        updateActiveCertificate={(index) => setActiveCertificate(index + 1)}                  
                    /> 
                ))}
            </div>
            </div>
        </div>
    );
}
export default CERTIFICATES;