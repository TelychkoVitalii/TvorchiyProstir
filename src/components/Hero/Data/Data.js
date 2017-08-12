import React from 'react';
import styles from './Data.css';

class Data extends React.Component {
    constructor(props) { super(props); }

    render() {
        return (
            <div className={styles.heroData}>
                <div className={styles.dataBox}>
                    <p>17 Sep | 19 Sep </p>
                    <div className={styles.hr}></div>
                    <p>17 September</p>
                </div>
            </div>
        )
    }
}

export default Data;