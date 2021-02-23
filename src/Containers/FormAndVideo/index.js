import React from "react";
import './styles.scss';
import Video from "../../Components/Video";
import {FormattedMessage} from "react-intl";


const FormAndVideo = props =>  {
    return(
        <section className="form">
           <div className="form_container">
              <div className="form_title">
                  <h4><FormattedMessage id="startToday.title" /></h4>
                  <p><FormattedMessage id="startToday.subtitle" /></p>
              </div>
             <Video className="form_container_video"/>

           </div>
        </section>

    );
}


export default FormAndVideo;