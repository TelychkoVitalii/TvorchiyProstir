import React from 'react';
import ReactDOM from 'react-dom';

import Header from '../Header/Header';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header/>
            </div>
        )
    }
}

export default App;