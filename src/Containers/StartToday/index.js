import React,{useContext} from 'react';
import {LocalizationContext} from "../../context/LocalizationContext";


const StartToday = props =>  {
    const [locale , setLocale] = useContext(LocalizationContext);
    return(
      <section className="start_container">
          <div className="start_container_howItWorks">

          </div>
          <div className="start_container_bidding">

          </div>
      </section>
    );
}


export default StartToday;