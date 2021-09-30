import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {GiCommercialAirplane} from 'react-icons/gi';
import './imageButton.scss'

const blockName = 'image-button';
let iconStyles = { color: "green", fontSize: "1.5rem", };

export default class ImageButton extends PureComponent {

    static propTypes = {
        lable: PropTypes.string,
        handleClick: PropTypes.func,
      };

      render() {
        const {label, handleClick} = this.props;
        return(
           <div className={`${blockName}__button-wrap`}>
                <button className={`${blockName}__destination-button`} onClick={handleClick}>
                    <span>{label}</span>
                    <GiCommercialAirplane style={iconStyles}/>
                </button>
            </div>
        )
    }

}