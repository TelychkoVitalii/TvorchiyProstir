import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import styles from './Header.css';

import Home from '../Main/Home/Home';
import About from '../Main/About/About';

const headerTitles = [
            {id: 1, name: 'Home', link: '/'}, 
            {id: 2, name: 'About', link: '/about', 
                                   extra: [
                                       {name: 'Team', link: '/about/team'},
                                       {name: 'Festival', link: '/about/festival'}
                                    ]},
            {id: 3, name: 'Events', link: '/events'},
            {id: 4, name: 'Get Involved', link: '/involved', 
                                          extra: [
                                              {name: 'As Press', link: '/involved/press'}, 
                                              { name: 'As Partner', link: '/involved/person'}
                                            ]},
            {id: 5, name: 'Contact US', link: '/contactus', 
                                        extra: [
                                            {name: 'Location', link: '/contactus/location'},
                                            {name: 'FuckFuck', link: '/contactus/fuck'}
                                        ]},
            {id: 6, name: 'Buy Tickets', link: '/checkout'}
        ];


class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = { isOpen: false, selected: null }
    }
    handleClick(target) {
        console.log(target)
        headerTitles.map( (el, index) => {
            ( el.id === target.id ) 
            ? this.setState({ isOpen: !this.state.isOpen, selected: target.id })
            : null
        })
    }

    childHandleClicker(targetChild) {
        console.log('Check Child', targetChild);
    }

    
    render() {
        const listItems = headerTitles.map((el, index) => 
            <li onClick={this.handleClick.bind(this, el)} className={styles.listItem} key={index}>
                    <Link to={el.link}>{el.name}</Link>
                { el.extra 
                    ? <ul> { (this.state.isOpen && this.state.selected === el.id)
                            ? <li> { el.extra.map((el, index) =>  
                                    <span className={styles.childList} 
                                          key={index} 
                                          onClick={this.childHandleClicker.bind(this, el.name)}>
                                                        <Link to={el.link}>{el.name}</Link>
                                    </span> )}
                              </li>
                            : null
                            }
                      </ul> 
                    : null
                }
            </li>)
        const routeLinks = headerTitles.map( (el, index ) => <Link key={index} to={el.link}>{el.name}</Link>)
        return (
                <div className={styles.headerRow}>
                    <ul className={styles.listItems}>
                        { listItems }
                    </ul>
                    <hr/>
                </div>
        )
    }
}

export default Header;