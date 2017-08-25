import React from 'react';
import ReactDOM from 'react-dom';

import { Switch, Route } from 'react-router-dom'
import styles from './Main.css';
import Home from './Home/Home';
import About from './About/About';
import Team from './About/Team/Team';
import Festival from './About/Festival/Festival';

import Events from './Events/Events';
import Involved from './Involved/Involved';
import Press from './Involved/Press/Press';
import Person from './Involved/Person/Person';

import Contact from './Contact/Contact';
import OurLocation from './Contact/OurLocation/OurLocation';
import Fuck from './Contact/Fuck/Fuck';

import Checkout from './Checkout/Checkout';

class Main extends React.Component {
   
    render() {
        return (
            <div className={styles.mainRow}>
                <Switch>
                    <Route exact path='/home' component={Home} />
                    <Route path='/about/festival' component={Festival} />
                    <Route path='/about/team' component={Team} />
                    <Route exact path='/' component={Home}/>

                    <Route path='/events' component={Events}/>

                    <Route exact path='/involved' component={Involved}/>
                    <Route path='/involved/press' component={Press}/>
                    <Route path='/involved/person' component={Person}/>

                    <Route exact path='/contactus' component={Contact}/>
                    <Route path='/contactus/location' component={OurLocation}/>
                    <Route path='/contactus/fuck' component={Fuck}/>

                    <Route path='/checkout' component={Checkout}/>
                </Switch>
            </div>
        )
    }
}

export default Main;
