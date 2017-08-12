import React from 'react';
import styles from './Header.css';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1 className={styles.heading}>HELLO FROM HEADER</h1>
            </div>
        )
    }
}

export default Header;