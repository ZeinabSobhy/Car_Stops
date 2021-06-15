import React from "react";
import './footer.scss';
import Logo from '../../../assets/logos/logo.svg'
import Facebook from '../../../assets/logos/facebook-light.svg';
import Instagram from '../../../assets/logos/instagram-light.svg';
import Google from '../../../assets/logos/goole-light.svg';
import Twitter from '../../../assets/logos/twitter-light.svg';
import Youtube from '../../../assets/logos/youtube-light.svg';
import {FormattedMessage} from "react-intl";

const Footer = props =>  {
    return (
       <footer className="footer">
                   <div className="footer_logo_footer">
                          {/* <img src={Logo}/> */}
                          <p> <FormattedMessage id="footer.subtitle" /></p>
                   </div>
             <div className="footer_social-icons">
               <h4>  <FormattedMessage id="footer.social" /></h4>
                 <div className="footer_social-icons_grid">
                     <img src={Facebook}  />
                     <img src={Twitter}  />
                     <img src={Youtube}  />
                     <img src={Instagram} />
                     <img src={Google} />
                 </div>

             </div>
       </footer>
    )
}

export default Footer