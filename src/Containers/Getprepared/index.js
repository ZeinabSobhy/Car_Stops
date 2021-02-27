import React from "react";
import {FormattedMessage, useIntl} from "react-intl";
import './getprepared.scss';



const GetPrepared = props =>   {
    const locale = useIntl().locale;

    return (
        <section className="prepared">
            <div className="prepared_container">
                <div className="prepared_container_title">
                    <h3> <FormattedMessage id="prepared.headline" /></h3>
                    <p><FormattedMessage id="prepared.subtitle" /></p>
                </div>
                <div className="prepared_container_grid">
                    <div className="prepared_container_grid_item">
                      <ul>
                          <li><p style={locale == "ar" ? {marginRight:'1rem'} : null}><FormattedMessage id="prepared.rules.first" /></p></li>
                          <li><p><FormattedMessage id="prepared.rules.second" /></p></li>
                          <li><p><FormattedMessage id="prepared.rules.third" /></p></li>
                          <li><p><FormattedMessage id="prepared.rules.fourth" /></p></li>

                      </ul>
                    </div>
                    <div className="prepared_container_grid_item">
                      <ul>
                          <li><p><FormattedMessage id="prepared.rules.fifth" /></p></li>
                          <li><p><FormattedMessage id="prepared.rules.sixth" /></p></li>
                          <li><p><FormattedMessage id="prepared.rules.seventh" /></p></li>
                          <li><p  style={locale == "ar" ? {marginRight:'1rem'} : null}><FormattedMessage id="prepared.rules.eight" /></p></li>
                      </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default GetPrepared;