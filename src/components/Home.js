import React from 'react';
import Gallery from './Gallery'
import './home.scss';

const Home = () => {
    return (
        <div>
            <header>
                <h1>Dmitriy</h1>
                <p>Welcome to my personal site!</p>
            </header>
            <main>
                <p>I'm Dmitriy Shishkov — photographer, programmer, filmmaker and writer. Here you can see some of my works. I'll upload more soon.</p>
                <Gallery type="galleryList" />
            </main>
        </div>
    );
}
export default Home;