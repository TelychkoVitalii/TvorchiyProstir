import React from 'react';
import ReactDOM from 'react-dom';

import Hero from '../Hero/Hero';
import Header from '../Header/Header';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Hero/>
                <Header/>
            </div>
        )
    }
}

export default App;