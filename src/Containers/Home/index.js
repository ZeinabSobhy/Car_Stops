import React from "react";
import './_Home.scss';
import Background from "../../Components/Background";
import StartToday from "../StartToday";
import FormAndVideo from "../FormAndVideo";


const Home = props =>  {
    return(
        <section>
            <Background/>
            <StartToday/>
            <FormAndVideo/>
        </section>
    )
}

export default Home;