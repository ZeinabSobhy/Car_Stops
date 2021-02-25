import React from "react";
import './service.scss';
import {FormattedMessage} from "react-intl";


const Service = ({icon , title , subtitle}) =>  {

    return(
        <div className="service_card">
            <div className="service_card_item">
                 <img src={icon} className="service_card_item_img"/>
                <div className="service_card_item_content">
                    <h3>{title}  </h3>
                    <p>{subtitle}</p>
                </div>
            </div>

        </div>
    )
}

export default Service;
