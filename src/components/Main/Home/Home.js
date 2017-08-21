import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Home.css';
import Subscribe from '../../Subscribe/Subscribe';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                 <h1>HOME </h1>
                 <Subscribe />  
            </div>
        )
    }
}

export default Home;
