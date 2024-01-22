import React from 'react';
import style from "./Home.module.css";
import HOME_TEXT from "./HomeText/HomeText.js";

const HOME  = () =>{
    return(
        <div className={style.container}>
          <div className={style.HomeTEXTcontainer}>
              <HOME_TEXT/>
          </div>     
        </div>
    );
}
export default HOME;
