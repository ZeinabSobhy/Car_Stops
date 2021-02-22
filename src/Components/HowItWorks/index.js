import React , {useState} from "react";
import {FormattedMessage} from "react-intl";
import './howitworks.scss';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from "@material-ui/core/Typography";

const HowItWorks = props =>  {
    return (
        <div className="howItWorks">
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
                        primary={<Typography className="title" >
                            <FormattedMessage id="howItWorks.firstPoint.title"/>
                        </Typography>}
                        secondary={<Typography className="subtitle" >
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
                        primary={<Typography style={{width:'11.688rem' , height:'1.313rem'}} className="title">
                            <FormattedMessage id="howItWorks.secondPoint.title"/>

                        </Typography>}
                        secondary={<Typography className="subtitle" >
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
                            <Typography style={{width:'17.875' , height:'2.25rem'}}  className="subtitle">
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