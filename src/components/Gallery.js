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
    const [pagesAmount, setPagesAmount] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const [hasError, setHasError] = useState(false);
    const size = (props.type === "galleryList") ? 4 : 9;

    useEffect( () => {
        const fetchData = async () => {
            try {
                const res = await fetch(`${process.env.REACT_APP_API_URL}/?size=${size}&page=${currentPage}`);

                if (!res.ok) {
                    throw Error(res.statusText);
                }
                const json = await res.json();

                setPagesAmount(json.pagesAmount);
                setGalleryData(g => [...g, ...json.list] );

            } catch (error) {
                setHasError(true);
                console.log(error);
            }
        }
        fetchData();
    }, [size, currentPage]);

    return (
        <div className={props.type}>
            { GalleryList(galleryData) }
            { ( props.type === "galleryGrid" &&
                currentPage < pagesAmount || hasError ) &&
                <button onClick={ () => {
                        setCurrentPage(currentPage + 1);
                        setHasError(false);
                    }
                }>
                    { hasError ? "Error, press to try again" : "Show more" }
                </button>}
        </div>
    );
}

export default Gallery;