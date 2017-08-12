import React from 'react';
import styles from './Header.css';

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    render() {
        const headerTitles = ['Home', 'About', 'Events', 'Get Involved', 'Contact Us', 'Buy Tickets'];
        const listItems = headerTitles.map((title, index) => 
            <li className={styles.listItem} key={index}>{title}</li>);
        return (
            <div>
                <ul className={styles.listItems}>{listItems}</ul>
            </div>
        )
    }
}

export default Header;