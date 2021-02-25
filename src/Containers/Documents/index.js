import React from "react";
import {FormattedMessage} from "react-intl";
import './documents.scss';


const Documents = props =>  {

return(
    <section className="document">
        <div className="document_container">
            <div className="document_container_title">
                   <h3> <FormattedMessage id="required.first" /></h3>
            </div>
            <div className="document_container_title_grid">
       <h4> <FormattedMessage id="required.second" /></h4>
                <div className="document_container_title_grid_item">
                    <h5> <FormattedMessage id="required.fourth.headline" /></h5>
                    <p>  <FormattedMessage id="required.fourth.subtitle" /></p>

                </div>
                <h6> <FormattedMessage id="required.third" /></h6>
            </div>
        </div>
    </section>
)
}

export default Documents;