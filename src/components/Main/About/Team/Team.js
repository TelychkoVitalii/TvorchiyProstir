import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Team.css';

class Team extends React.Component {
  
    render() {
        return (
            <div>
               <div className={styles.oneRow}>
                    <p>1</p>
                    <p>2</p>
               </div>
               <div className={styles.oneRow}>
                    <p>1</p>
                    <p>2</p>
               </div>
            </div>
        )
    }
}

export default Team;