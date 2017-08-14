import React from 'react';
import styles from './Sponsors.css';

class Sponsors extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const sponsor = [
            {id: 1, url: '../../../../../assets/sponsors/sponsor_1.png', name: 'first'},
            {id: 2, url: '../../../../../assets/sponsors/sponsor_2.png', name: 'two'},
            {id: 3, url: '../../../../../assets/sponsors/sponsor_3.png', name: 'three'},
            {id: 4, url: '../../../../../assets/sponsors/sponsor_4.png', name: 'four'},
            {id: 5, url: '../../../../../assets/sponsors/sponsor_5.png', name: 'five'},
            {id: 6, url: '../../../../../assets/sponsors/sponsor_6.png', name: 'six'},
        ].map( (el, index) => 
        <div className={styles.sponsorBox} key={index}>
            <img src={el.url} alt={el.name}/>
        </div>)
        return (
            <div className={styles.sponsorsWrapper}>
                {sponsor}
            </div>
        )
    }
}

export default Sponsors;