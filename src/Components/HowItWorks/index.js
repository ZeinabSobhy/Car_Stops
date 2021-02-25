import React , {useState} from "react";
import {FormattedMessage, useIntl} from "react-intl";
import './howitworks.scss';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from "@material-ui/core/Typography";
import {useMediaQuery} from '@material-ui/core';
import useTheme from '@material-ui/core/styles/useTheme'

const HowItWorks = props =>  {
    const theme = useTheme();
    const locale = useIntl().locale;
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('xs'));
    return (
        <div className="howItWorks" style={isSmallScreen && locale!="en" ? {padding:'0'} : null}>
            <h3> <FormattedMessage id="howItWorks.title"/></h3>
            <p><FormattedMessage id="howItWorks.subtitle"/></p>
            <List>

                <ListItem >
                    <ListItemIcon className="howItWorks_ico">
                                   <Typography >
                {"1"}
            </Typography>
                    </ListItemIcon>
                    <ListItemText
                        primary={<Typography className="title" style={isSmallScreen ? {fontSize:'1rem'} : null} >
                            <FormattedMessage id="howItWorks.firstPoint.title"/>
                        </Typography>}
                        secondary={<Typography className="subtitle" style={isSmallScreen? {fontSize:'0.55rem' } :null} >
                            <FormattedMessage id="howItWorks.firstPoint.subtitle"/>
                        </Typography>}
                    />
                </ListItem>
                <ListItem >
                    <ListItemIcon className="howItWorks_ico">
                                   <Typography >
                {"2"}
            </Typography>
                    </ListItemIcon>
                    <ListItemText
                        primary={<Typography style={{width:'11.688rem' , height:'1.313rem' , whiteSpace:'nowrap',fontSize:isSmallScreen?'1rem' : null}} className="title">
                            <FormattedMessage id="howItWorks.secondPoint.title"/>

                        </Typography>}
                        secondary={<Typography className="subtitle" style={isSmallScreen? {fontSize:'0.55rem' } :null} >
                            <FormattedMessage id="howItWorks.secondPoint.subtitle"/>
                        </Typography>}
                    />
                </ListItem>

                <ListItem >
                    <ListItemIcon  className="howItWorks_ico">
                                   <Typography>
                {"3"}
            </Typography>

                    </ListItemIcon>
                    <ListItemText
                        primary={<Typography style={{width:'7.625rem' , height:'1.313rem'}} className="title" > <FormattedMessage id="howItWorks.thirdPoint.title"/></Typography>}
                        secondary={<div>
                            <Typography style={{width:'17.875' , height:'2.25rem', fontSize: isSmallScreen ? '0.55rem'  :null}}  className="subtitle">
                                <FormattedMessage id="howItWorks.thirdPoint.subtitle"/>
                            </Typography>
                        </div>
                        }
                    />
                </ListItem>



            </List>
        </div>
    )
}


export default HowItWorks ;