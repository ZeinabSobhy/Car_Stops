import React from "react";
import './_Home.scss';
import Background from "../../Components/Background";
import StartToday from "../StartToday";


const Home = props =>  {
    return(
        <section>
            <Background/>
            <StartToday/>
        </section>
    )
}

export default Home;