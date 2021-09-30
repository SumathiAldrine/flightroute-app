import React, {PureComponent} from 'react';
import ImageButton from '../imageButton';
import './header.scss'
import PropTypes from 'prop-types';

const blockName = 'flight-header';
export default class Header extends PureComponent {
    
    static propTypes = {
        label: PropTypes.string,
        handleClick: PropTypes.func,
        headingLabel: PropTypes.string,
        subHeading: PropTypes.string,
      };

    render() {
        const {headingLabel, subHeading, label } = this.props;
        return(
            <div className={`${blockName}__header`}>
                <div className={`${blockName}__header-wrap`}>
                    <h1 tabIndex="0">{headingLabel}</h1>
                    <p tabIndex="0">{subHeading}</p>
                    <ImageButton 
                        label = {label}
                        handleClick = {this.props.onShowClick}
                    />
                </div>
            </div>
        )
    }

}