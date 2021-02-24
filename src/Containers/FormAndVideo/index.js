import React from "react";
import './styles.scss';
import Video from "../../Components/Video";
import {FormattedMessage} from "react-intl";
import Form from "../../Components/Form";


const FormAndVideo = props =>  {
    return(
        <section className="form">
           <div className="form_container">
              <div className="form_title">
                  <h4><FormattedMessage id="startToday.title" /></h4>
                  <p><FormattedMessage id="startToday.subtitle" /></p>
              </div>
            <div className="form_container_grid">
                <Video className="form_container_video"/>
                <Form/>
            </div>
           </div>
        </section>

    );
}


export default FormAndVideo;