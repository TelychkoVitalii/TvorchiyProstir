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
        setTimeout(() => this.setState({ loading: false }), 5000); 
      }

    render() {
        return (
            <div>
                {this.state.loading ?
                    <div className={styles.bgcLogo}>
                        <img className={styles.firstLogo} 
                             src="../../../../../assets/the_tvorchiy_prostir.jpg" 
                             alt="logo" />
                    </div> :
                    <div className={styles.initialStyle}>
                        <div className={styles.stickyWrapper}>
                            <header>
                                <Hero/>
                            <Header/>
                        </header>
                        <main className={styles.mainWrapper}>
                            <Main/>
                        </main>
                        <footer>
                            <Footer/>
                        </footer>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default App;