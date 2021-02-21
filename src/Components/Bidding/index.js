import React from 'react';
import bidIcon from '../../assets/icons/bid-ic.png'
import {FormattedMessage} from "react-intl";
import './bidding.scss';
const Bidding = props => {
    return(
        <div className="bidding">
            <img className="bidding_img" src={bidIcon}/>
              <h3 className="bidding_h3"> <FormattedMessage id="bidding.title" /></h3>
            <h5 className="bidding_h5"><FormattedMessage id="bidding.subtitle" /></h5>
        </div>
    )
}
export default Bidding;