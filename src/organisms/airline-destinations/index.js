import React, {Fragment, useState} from 'react';

import {FlightRouteInfo} from './test.data';
import RouteInformation from '../../molecules/route-info';
import Header from '../../atoms/header';
import './airline-destination.scss'

const blockName = 'airline-destination';
const label = 'Show Destnations';
const headingLabel = 'Fly Experience';
const subHeading = 'Top 10 interesting destinations from Dubai';

function AirlineDestinations() {
    const[schedule, setSchedule] = useState(false);
    const[selected, setSelected] = useState(false);
    
        return(
            <Fragment>
              
                <Header 
                label={label}
                headingLabel={headingLabel}
                subHeading={subHeading}
               onShowClick={() => setSchedule(true)} /> 
                
               <ul className={`${blockName}__route-information--list`}>
                    {schedule && FlightRouteInfo.map((item, index) => 
                        <RouteInformation 
                            item={item}
                            key={index}
                            index={index} 
                            selected={selected}
                            handleSelect={() => setSelected(index)} />)}
                </ul>
            </Fragment>
        )
}
export default AirlineDestinations;