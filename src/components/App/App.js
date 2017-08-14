import React from 'react';
import ReactDOM from 'react-dom';

import Hero from '../Hero/Hero';
import styles from './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                    <Hero/>
                    <Header/>
                    <Main/>
                    <Footer/>
            </div>
        )
    }
}

export default App;