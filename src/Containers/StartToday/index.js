import React from 'react';
import Bidding from "../../Components/Bidding";
import How from "../How";



const StartToday = props =>  {
    return(
      <section className="start_container">
          <div className="start_container_howItWorks">
<How/>

          </div>
          <div className="start_container_bidding">
                 <Bidding/>
          </div>
      </section>
    );
}


export default StartToday;