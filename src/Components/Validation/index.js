import React , {useContext} from "react";
import './validation.scss';
import Done from '../../assets/icons/done.png';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import {FormattedMessage} from "react-intl";
import {FormContext} from "../../context/FormContext";



const Validation = props => {
    const [sent , setSent] = useContext(FormContext);

    return (
        <div className="valid">
            <img src={Done}/>
            <h3> <FormattedMessage id="startToday.successSection.headline" /></h3>
            <p><FormattedMessage id="startToday.successSection.message" /></p>
            <button onClick={() => setSent(false)} ><p><FormattedMessage id="startToday.successSection.successBtn"/></p>
                <ArrowForwardIosIcon style={{fontSize:'small' , order:'2' , color:'#ffffff'}} />
            </button>
        </div>
    )
}


export default Validation;