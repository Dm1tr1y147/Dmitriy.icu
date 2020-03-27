import React, { useState } from 'react';
import ViewBox from './ViewBox'
import './GalleryItem.scss';

const GalleryItem = props => {
    const [showViewBox, setShowViewbox] = useState(false);
    const src = 'http://localhost:8000/' + props.src;

    return (
        <div className="galleryItem" onClick={ () => setShowViewbox(true) }>
            <img alt="My shots" src={src} />

            {showViewBox && <ViewBox src={src} click={setShowViewbox} /> }
        </div>
    );
}

export default GalleryItem;