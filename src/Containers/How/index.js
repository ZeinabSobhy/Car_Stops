import React from 'react';
import  './how.scss';
import {FormattedMessage, useIntl} from "react-intl";
import ListItem from "../../Components/ListItem";
import useTheme from '@material-ui/core/styles/useTheme'
import {useMediaQuery } from '@material-ui/core';

const How = props =>  {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('xs'));
    const locale = useIntl().locale;
return (
    <div className="how">
  <div className="how_title">
      <h3> <FormattedMessage id="howItWorks.title"/></h3>
      <p><FormattedMessage id="howItWorks.subtitle"/></p>
  </div>
        <div className="how_items">
            <ListItem number={1} title={ <FormattedMessage id="howItWorks.firstPoint.title"/>} subtitle={  <FormattedMessage id="howItWorks.firstPoint.subtitle"/>}/>
            <ListItem number={2} title={ <FormattedMessage id="howItWorks.secondPoint.title"/>} subtitle={  <FormattedMessage id="howItWorks.secondPoint.subtitle"/>}/>
            <ListItem number={3} title={ <FormattedMessage id="howItWorks.thirdPoint.title"/>} subtitle={  <FormattedMessage id="howItWorks.thirdPoint.subtitle"/>}
            style={isSmallScreen && locale=="ar" ? {whiteSpace:'nowrap'} : null }/>

        </div>
    </div>
)
}

export default How;