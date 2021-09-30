import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import './flight-action.scss';
import CallToAction from '../../atoms/cta';

const blockName = 'flight-action';
export default class FlightAction extends PureComponent {
    render() {
       const { selected, handleSelect, index, flightNo} = this.props;
        return (
            <div className={`${blockName}__select`}>
            <div className='flightNo' tabIndex='0'>{flightNo}</div>
            <CallToAction 
                index = {index}
                selected = {selected}
                handleSelect = {handleSelect}
            />
        </div>
        );
    }
}

FlightAction.propTypes = {
    flightNo: PropTypes.string,
  };