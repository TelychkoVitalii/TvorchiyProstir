import React from 'react';
import styles from './Hero.css';

import Data from './Data/Data';
import Logo from './Logo/Logo';
import Socials from './Socials/Socials';

class Hero extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.heroRow}>
                <Data/>
                <Logo/>
                <Socials/>
            </div>
        )
    }
}

export default Hero;