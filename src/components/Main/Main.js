import React from 'react';
import ReactDOM from 'react-dom';

import { Switch, Route, Redirect } from 'react-router-dom'
import styles from './Main.css';
import Home from './Home/Home';
import About from './About/About';
import Team from './About/Team/Team';
import Festival from './About/Festival/Festival';

import Events from './Events/Events';
import Involved from './Involved/Involved';
import Press from './Involved/Press/Press';
import Partners from './Involved/Partners/Partners';

import Contact from './Contact/Contact';
import OurLocation from './Contact/OurLocation/OurLocation';
import FindUs from './Contact/FindUs/FindUs';

import Checkout from './Checkout/Checkout';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
          afterLoader: false
        }
    }
    // Need to redirect after loader finished / from / to /home
    componentDidMount() {
        setTimeout(() => this.setState({ afterLoader: true }), 225); 
    }

    render() {
        return (
            <div className={styles.mainRow}>
                <Switch>
                    <Route exact path='/home' component={Home} />
                    <Route path='/about/festival' component={Festival} />
                    <Route path='/about/team' component={Team} />

                    <Route path='/events' component={Events}/>

                    <Route exact path='/involved' component={Involved}/>
                    <Route path='/involved/press' component={Press}/>
                    <Route path='/involved/partners' component={Partners}/>

                    <Route exact path='/contacts' component={Contact}/>
                    <Route path='/contacts/location' component={OurLocation}/>
                    <Route path='/contacts/find_us' component={FindUs}/>

                    <Route path='/checkout' component={Checkout}/>
                </Switch>
                { this.state.afterLoader ? <Redirect from='/' to='/home' /> 
                                         : <Route exact path='/home' component={Home} /> }
            </div>
        )
    }
}

export default Main;
