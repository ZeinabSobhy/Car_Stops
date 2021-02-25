import React from "react";
import './_Home.scss';
import Background from "../../Components/Background";
import StartToday from "../StartToday";
import FormAndVideo from "../FormAndVideo";
import Services from "../Services";
import GetPrepared from "../Getprepared";


const Home = props =>  {
    return(
        <section>
            <Background/>
            <StartToday/>
            <FormAndVideo/>
            <Services/>
            <GetPrepared/>
        </section>
    )
}

export default Home;