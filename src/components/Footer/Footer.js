import React from 'react';
import styles from './Footer.css';
import Sponsors from './Sponsors/Sponsors';

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.footerRow}>
                <p className={styles.footerTitle}> <span>Our</span> <span>Main</span>  <span>Sponsors</span></p>
                <Sponsors/>
            </div>
        )
    }
}

export default Footer;