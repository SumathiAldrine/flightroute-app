import React, {PureComponent} from 'react';
import './cta.scss';

const blockName = 'cta';
export default class CallToAction extends PureComponent {
    render() {
       const { selected, handleSelect, index} = this.props;
        return (
            <button className={blockName} onClick={handleSelect}>
                 {selected === index?"Selected":"Select" }
            </button>
        );
    }
}