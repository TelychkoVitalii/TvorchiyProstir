import React from 'react';
import ReactDOM from 'react-dom';
import styles from './FindUs.css';

class FindUs extends React.Component {

    render() {
        return (
            <div>
                <div className={styles.contacts}>
                    <p>
                        Наши двери открыты для художников, скульпторов и просто творческих людей у которых полно отличных идей!
                        Мы готовы совместно с Вами провести необычные мероприятия на нашей локации. 
                        Так же,команда 'Tvorchiy Prostir' регулярно устраивает мероприятия вне площадки 'Артішок'. 
                        <p>По вопросам сотрудничества</p>
                    </p>
                    <p className={styles.phone}>067 467 13 13</p>
                    <p className={styles.phone}>098-728-75-79</p>
                    <p className={styles.phone}>tvorchiy.prostir@gmail.com</p>
                </div> 
            </div>
        )
    }
}

export default FindUs;
