import React from 'react'
import './footer.scss'
import { ReactComponent as Telegram } from './telegram.svg'
import { ReactComponent as Instagram } from './instagram.svg'
import { ReactComponent as Vk } from './vk.svg'
import { ReactComponent as LastFM } from './lastfm.svg'

const Footer = () => {
    return (
        <footer>
            <div className="social" >
                <a href="https://ttttt.me/dsh147"><Telegram /></a>
                <a href="https://instagram.com/i.have.no.camera"><Instagram /></a>
                <a href="https://vk.com/dsh147"><Vk /></a>
                <a href="https://last.fm/user/Dm1tr1y1"><LastFM /></a>
            </div>
            <p>Shishkov Dmitriy <span role="img" aria-label="Coll">👌</span> — 2020</p>
        </footer>
    );
}

export default Footer;