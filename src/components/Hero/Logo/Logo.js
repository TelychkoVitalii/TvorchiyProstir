import React from 'react';
import styles from './Logo.css';

class Logo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.heroLogo}>
                <img src="../../../assets/brand_logo.png" alt="brand logo " className={styles.imgLogo}/>
            </div>
        )
    }
}

export default Logo;