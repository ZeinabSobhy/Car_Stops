import React from 'react';
import bidIcon from '../../assets/icons/bid-ic.png'
import {FormattedMessage} from "react-intl";
import './bidding.scss';
const Bidding = props => {
    return(
        <div className="bidding">
            <img src={bidIcon}/>
              <h3 > <FormattedMessage id="bidding.title" /></h3>
            <p><FormattedMessage id="bidding.subtitle" /></p>
        </div>
    )
}
export default Bidding;