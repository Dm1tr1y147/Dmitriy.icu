import React, { useState } from 'react';
import ViewBox from './ViewBox'
import './GalleryItem.scss';

const GalleryItem = props => {
    const [showViewBox, setShowViewbox] = useState(false);
    const src = process.env.REACT_APP_API_URL + '/' + props.src;

    return (
        <div className="galleryItem" >
            <img alt="My shots" src={src} onClick={ () => setShowViewbox(true) } />

            {showViewBox && <ViewBox src={src} click={setShowViewbox} /> }
        </div>
    );
}

export default GalleryItem;