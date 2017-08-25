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
        this.state = { 
          loading: true
        }
    }

    componentDidMount() {
        setTimeout(() => this.setState({ loading: false }), 3500); 
      }

    render() {
        return (
            <div className={styles.app}>
            {this.state.loading ?
                <img id="firstLogo" src="../../../../../assets/the_tvorchiy_prostir.jpg" alt="logo" /> :
                <div>
                    <Hero/>
                    <Header/>
                    <Main/>
                    <div className={styles.footer}>
                        <Footer/>
                    </div>
                </div>    
            }
            </div>
        )
    }
}

export default App;