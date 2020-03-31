import React from 'react';
import './viewBox.scss';

const ViewBox = props => {
    return (
        <div className="viewBox" >
            <img alt="Full" src={props.src} onClick={() => { 
                setTimeout(() => props.click(false), 100);
            }} />
        </div>
    );
}
export default ViewBox;