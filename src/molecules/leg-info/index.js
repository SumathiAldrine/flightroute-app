import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import './leg-info.scss';

const blockName = 'leg-information';

export default class LegInfo extends PureComponent {
    render() {
        const {legName, time, date} = this.props;
        return (
            <div className={`${blockName}__leg-info`}>
                <div className={`${blockName}__leg-info-name`} tabIndex='0'>
                    {legName}
                </div>
                <div className={`${blockName}__leg-info-time`} tabIndex='0'>{time}</div>
                <div tabIndex='0'>{date}</div>
            </div>
        );
     }
}
LegInfo.propTypes = {
    legName: PropTypes.string,
    time: PropTypes.string,
    date: PropTypes.string,
  };

