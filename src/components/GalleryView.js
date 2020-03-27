import React from 'react';
import Gallery from './Gallery'
import './galleryView.scss';

const GalleryView = () => {

    return (
        <div className="galleryView">
            <h1>Gallery</h1>
            <Gallery type="galleryGrid" />
        </div>
    );
}
export { GalleryView };