import React from 'react';
import styles from './Logo.css';

class Logo extends React.Component {
   
    render() {
        return (
            <div className={styles.heroLogo}>
                <img src="../../../assets/the_tvorchiy_prostir.jpg" alt="brand logo " className={styles.imgLogo}/>
            </div>
        )
    }
}

export default Logo;