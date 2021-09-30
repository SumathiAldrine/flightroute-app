import React, {PureComponent, Fragment} from 'react';

import './route-info.scss';
import LegInfo from '../leg-info';
import AircraftInfo from '../aircraft-info';
import FlightAction from '../flight-action';

const blockName = 'route-info';

export default class RouteInformation extends PureComponent {
    render() {
        const { selected, handleSelect, index, item: {id, flightNo, departureDate, departureTime, arrivalDate, arrivalTime, duration, origin, destination, aircraft}} = this.props;
        return (
            <Fragment>
                <li id={id} tabIndex='0' className={selected === index?`${blockName}__container selected`:`${blockName}__container`}>
                   <LegInfo
                        legName={origin}
                        time={departureTime}
                        date={departureDate}
                    />
                    <AircraftInfo 
                        aircraft={aircraft}
                        duration={duration}
                    />
                    <LegInfo
                        legName={destination}
                        time={arrivalTime}
                        date={arrivalDate}
                    />
                    <FlightAction
                        flightNo={flightNo}
                        handleSelect={handleSelect}
                        selected={selected}
                        index={index}
                    />
           
            </li>
        </Fragment>
        )
    }
}