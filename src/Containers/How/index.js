import React from 'react';
import  './how.scss';
import {FormattedMessage} from "react-intl";
import ListItem from "../../Components/ListItem";

const How = props =>  {
return (
    <div className="how">
  <div className="how_title">
      <h3> <FormattedMessage id="howItWorks.title"/></h3>
      <p><FormattedMessage id="howItWorks.subtitle"/></p>
  </div>
        <div className="how_items">
            <ListItem number={1} title={ <FormattedMessage id="howItWorks.firstPoint.title"/>} subtitle={  <FormattedMessage id="howItWorks.firstPoint.subtitle"/>}/>
            <ListItem number={2} title={ <FormattedMessage id="howItWorks.secondPoint.title"/>} subtitle={  <FormattedMessage id="howItWorks.secondPoint.subtitle"/>}/>
            <ListItem number={3} title={ <FormattedMessage id="howItWorks.thirdPoint.title"/>} subtitle={  <FormattedMessage id="howItWorks.thirdPoint.subtitle"/>}/>

        </div>
    </div>
)
}

export default How;