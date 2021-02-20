import React from "react";
import {FormattedMessage} from "react-intl";
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

const Background = props => {
    return(
        <section className="background">
              <div className="background_img">
                    <div className="background_img_txt">
                        <h3><FormattedMessage id="background.title"/></h3>
                        <h5><FormattedMessage id="background.subtitle" /></h5>
                    </div>

              </div>
            <div className="background__startToday">
                   <button> <FormattedMessage id="background.btn" /> <ArrowDownwardIcon className="background__startToday_ico"/> </button>
            </div>
        </section>
    )
}

export default Background;