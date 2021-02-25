import React from "react";
import './services.scss';
import {FormattedMessage} from "react-intl";
import Service from "../../Components/Service";
import Document from  '../../assets/icons/document.svg'
import Clock from  '../../assets/icons/clock.png'
import Star from  '../../assets/icons/shape.svg'

const Services = props =>  {
    return (
        <section className="services">
            <div className="services_container">
                <div className="services_container_title">
                    <h3> <FormattedMessage id="services.headline" /></h3>
                    <p> <FormattedMessage id="services.subtitle" /></p>
                </div>
                <div className="services_container_grid">
                          <Service icon={Document} title={ <FormattedMessage id="services.firstCard.headline" />} subtitle={ <FormattedMessage id="services.firstCard.subtitle" />}/>
                    <Service icon={Clock} title={ <FormattedMessage id="services.secondCard.headline" />} subtitle={<FormattedMessage id="services.secondCard.subtitle" />} />
                    <Service icon={Star} title={<FormattedMessage id="services.thirdCard.headline" />} subtitle={<FormattedMessage id="services.thirdCard.subtitle" />}/>

                </div>
            </div>

        </section>
    )
}


export default Services;