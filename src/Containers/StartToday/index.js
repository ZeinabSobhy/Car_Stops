import React,{useContext} from 'react';
import {LocalizationContext} from "../../context/LocalizationContext";
import Bidding from "../../Components/Bidding";


const StartToday = props =>  {
    const [locale , setLocale] = useContext(LocalizationContext);
    return(
      <section className="start_container">
          <div className="start_container_howItWorks">

          </div>
          <div className="start_container_bidding">
                 {/*<Bidding/>*/}
          </div>
      </section>
    );
}


export default StartToday;