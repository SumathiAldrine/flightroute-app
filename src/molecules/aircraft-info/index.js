import React, {PureComponent, Fragment} from 'react';
import PropTypes from 'prop-types';
import sn from 'classnames';
import FlightIcon from '../../images/flight_icon.png';
import TailIcon from '../../images/tail_icon.png';
import './aircraft-info.scss';

const blockName = 'aircraft-info';

export default class AircraftInfo extends PureComponent {
    render() {
        const {aircraft, duration} = this.props;
        return (
            <Fragment>
                <div className={`${blockName}__aircraft`}>
                    <div className={`${blockName}__tail-container`}>
                        <img className={`${blockName}__flight-tail`} src={TailIcon} alt="Tail" />
                        <span className={`${blockName}__tailNo`} tabIndex='0'>{aircraft}</span>
                    </div>
                    <div className={`${blockName}__progress-container`}>
                        <div className={`${blockName}__progress-line`}>
                            <img className={`${blockName}__progress-airplane`} src={FlightIcon} alt="Airline" />
                            <div className={`${blockName}__progress-line--complete`} />
                            <div className={sn(`${blockName}__progress-point`, `${blockName}__progress-point--finish`)}/>
                       </div>
                    </div>
                    <div className={`${blockName}__duration`} tabIndex='0'>{duration}</div>
                </div>                     
            </Fragment>
        );
     }
}
AircraftInfo.propTypes = {
    aircraft: PropTypes.string,
    duration: PropTypes.string,
  };

