import React from 'react';
import './listitem.scss';

const ListItem =( {number , title , subtitle , style}) =>   {

    return(
        <div className="item">
            <span className="item_number"><p>{number}</p></span>
            <div className="item_txt">
                <h3>{title}</h3>
                <p style={style ? style : null}>{subtitle}</p>
            </div>

        </div>
    )
}


export default ListItem;
