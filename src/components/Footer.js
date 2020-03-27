import React from 'react'
import './footer.scss'
import { ReactComponent as Telegram} from './telegram.svg'

const Footer = () => {
    return (
        <footer>
            <Telegram className="telegram" />
        </footer>
    );
}

export default Footer;