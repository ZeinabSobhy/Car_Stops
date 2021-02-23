import React from 'react';
import './FormAndVideo.scss';
import {FormattedMessage} from "react-intl";
import SellVideo from "../../Components/SellVideo";

const FormAndVideo = props =>   {
    return(
     <section className="form-section">
            <h3> <FormattedMessage id="startToday.title" /></h3>
            <p>  <FormattedMessage id="startToday.subtitle" /></p>
            <div className="form-section_container">
                <SellVideo/>

            </div>
     </section>
    )
};


export default FormAndVideo;