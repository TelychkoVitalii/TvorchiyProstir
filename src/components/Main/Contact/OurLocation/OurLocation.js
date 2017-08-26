import React from 'react';
import ReactDOM from 'react-dom';
import styles from './OurLocation.css';

class OurLocation extends React.Component {

    constructor(props) {
        super(props);
      }

    render() {
        return (
            <div>
                <h4 className={styles.address}>Адрес: ул.Телевизионная,3а (напротив вьезда в гостиницу Дружба)</h4>
            </div>
        )
    }
};

export default OurLocation;
