import React, {PureComponent, Fragment} from 'react';

import './route-info.scss';
import LegInfo from '../leg-info';
import AircraftInfo from '../aircraft-info';
import FlightAction from '../flight-action';

const blockName = 'route-info';

export default class RouteInformation extends PureComponent {
    state = {
        isMobile: window.innerWidth < 768
    }
    render() {
        const { selected, handleSelect, index, item: {id, flightNo, departureDate, departureTime, arrivalDate, arrivalTime, duration, origin, destination, aircraft}} = this.props;
        const { isMobile} = this.state;
        return (
            <Fragment>
                <li id={id} tabIndex='0' className={selected === index? (isMobile? `${blockName}__container-mobile selected` : `${blockName}__container selected`):(isMobile? `${blockName}__container-mobile` : `${blockName}__container`)}>
                   <LegInfo
                        isMobile={isMobile}
                        legName={origin}
                        time={departureTime}
                        date={departureDate}
                    />
                    <AircraftInfo
                        isMobile={isMobile}
                        aircraft={aircraft}
                        duration={duration}
                    />
                    <LegInfo
                        isMobile={isMobile}
                        legName={destination}
                        time={arrivalTime}
                        date={arrivalDate}
                    />
                    <FlightAction
                        isMobile={isMobile}
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