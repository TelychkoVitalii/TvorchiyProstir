import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import styles from './Header.css';

const headerTitles = [
            {id: 1, name: 'Home', link: '/home'}, 
            {id: 2, name: 'About Us', link: '/about', 
                                   extra: [
                                       {name: 'Team', link: '/about/team'},
                                       {name: 'Festival', link: '/about/festival'}
                                    ]},
            {id: 3, name: 'Events', link: '/events'},
            {id: 4, name: 'Involved', link: '/involved', 
                                          extra: [
                                              {name: 'Press', link: '/involved/press'}, 
                                              { name: 'Partners', link: '/involved/partners'}
                                            ]},
            {id: 5, name: 'Contacts', link: '/contacts', 
                                        extra: [
                                            {name: 'Location', link: '/contacts/location'},
                                            {name: 'Find Us', link: '/contacts/find_us'}
                                        ]},
            {id: 6, name: 'Buy Tickets', link: '/checkout'}
        ];


class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
          isOpen: false, 
          selected: null 
        }
    }

    handleEnter(target) {
        headerTitles.map( (el, index) => {
            ( el.id === target.id ) 
            ? this.setState({ isOpen: true, selected: target.id })
            : null
        })
    }

    handleLeave() {
      this.setState({ isOpen: false }); 
    }

    render() {
        const listItems = headerTitles.map((el, index) =>
        <div> 
            <p onMouseEnter={this.handleEnter.bind(this, el)} 
                 onMouseLeave={this.handleLeave.bind(this, el)}
                 className={styles.listItem} 
                 key={index}>
                  <Link to={el.link} className={styles.mainLink}>{el.name}</Link>
                  {el.extra 
                    ? <div className={styles.subBlock}>
                      {(this.state.isOpen && this.state.selected === el.id)
                          ? <div> { el.extra.map((el, index) =>  
                              <span key={index} >
                                <Link to={el.link} className={styles.subLink}>{el.name}</Link>
                              </span>)}
                            </div> 
                          : null
                        }
                        </div> 
                    : null
                }
            </p>
          </div>
        )
        return (
          <div>
            <div className={styles.listItems}>
               { listItems }
            </div>
        </div>
        )
    }
}

export default Header;