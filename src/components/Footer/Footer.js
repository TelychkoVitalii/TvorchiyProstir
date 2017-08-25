import React from 'react';
import styles from './Footer.css';
import Sponsors from './Sponsors/Sponsors';

class Footer extends React.Component {
   
    render() {
        return (
            <div>
               <p className={styles.copyright}>© Tvorchiy Prostir 2017</p>
            </div>
        )
    }
}

export default Footer;