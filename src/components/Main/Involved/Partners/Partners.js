import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Partners.css';

class Partners extends React.Component {

    render() {
        return (
            <div>
                 <p className={styles.partnersTitle}>
                 	Мы всегда рады видеть вас в числе наших участников фестиваля и выбираем всегда лучших!
					<p>Если вы хотите стать участником фестиваля, заполните форму:</p>
                 </p>
                 
            </div>
        )
    }
}

export default Partners;
