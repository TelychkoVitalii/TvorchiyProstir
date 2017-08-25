import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Festival.css';

class Festival extends React.Component {
  
    render() {
        return (
            <div>
                 <p className={styles.aboutFest}>
                     React is a JavaScript library, and so it assumes you have a basic understanding of the JavaScript language. If you don't feel very confident, we recommend refreshing your JavaScript knowledge so you can follow along more easily.
                     We also use some of the ES6 syntax in the examples. We try to use it sparingly because it's still relatively new, but we encourage you to get familiar with arrow functions, classes, template literals, let, and const statements.
                </p>
            </div>
        )
    }
}

export default Festival;