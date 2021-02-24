import React from "react";
import './services.scss';
import {FormattedMessage} from "react-intl";


const Services = props =>  {
    return (
        <section className="services">
            <div className="services_container">
                <div className="services_container_title">
                    <h3> <FormattedMessage id="services.headline" /></h3>
                    <p> <FormattedMessage id="services.subtitle" /></p>
                </div>
            </div>

        </section>
    )
}


export default Services;