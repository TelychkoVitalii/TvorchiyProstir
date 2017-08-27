import React from 'react';
import ReactDOM from 'react-dom';
import styles from './OurLocation.css';
import MapC from '../../../Map/Map';

class OurLocation extends React.Component {

    constructor(props) {
        super(props);
      }

    render() {
        return (
            <div>
                <h4 className={styles.address}>Адрес: ул.Телевизионная,3а (напротив вьезда в гостиницу Дружба)</h4>
                <MapC />
            </div>
        )
    }
};

export default OurLocation;
