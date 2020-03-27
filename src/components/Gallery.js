import React, { useEffect, useState } from 'react';
import GalleryItem from "./GalleryItem";
import './gallery.scss';

const GalleryList = (json) => {
    let result = [];
    let key = 0;
    for (const el of json) {
        result.push(
            <GalleryItem key={key++} src={el} />
        );
    }
    return result;
}

const Gallery = props => {
    const [galleryData, setGalleryData] = useState([]);
    const size = (props.type === "galleryList") ? 4 : 9;

    useEffect( () => {
        async function fetchData() {
            const res = await fetch(`http://localhost:8000/?size=${size}`);
            const json = await res.json();
            setGalleryData(json.list);
        }
        fetchData();
    }, [size]);

    return (
        <div className={props.type}>
            {GalleryList(galleryData)}
        </div>
    );
}

export default Gallery;