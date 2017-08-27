import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Team.css';

class Team extends React.Component {
  
    render() {
        return (
            <div>
            <h2 className={styles.titleTeam}>Давайте знакомиться!</h2>
            <h3 className={styles.titleTeam}>Мы- команда Tvorchiy Prostir и по совместительству лучшие друзья.</h3>
               <div className={styles.oneRow}>
               <figure>
                    <img src='https://s2.postimg.org/j97ueewg9/IMG_7856.jpg' 
                         className={styles.photoImage}
                         alt='photo_1'/>
                    // <figcaption>
                    //   Наше сильное плечо, которое умеет управлять любыми транспортными средствами, собственными руками делать пятиметровые вывески и выдерживать все, что происходит вокруг в части женского коллектива. В команде отвечает за юридическую и техническую сторону.
                    // </figcaption>
              </figure>
              <figure>
                    <img src='https://s2.postimg.org/gwzugtjux/IMG_7875.jpg' 
                         className={styles.photoImage}
                         alt='photo_2'/>
              </figure>
               </div>
               <div className={styles.oneRow}>
               <figure>
                    <img src='https://s2.postimg.org/e5l63yaq1/IMG_7912.jpg'
                         className={styles.photoImage} 
                         alt='photo_3'/>
               </figure>
              <figure>
                    <img src='https://s2.postimg.org/t2y8ipdc9/IMG_7897.jpg' 
                         className={styles.photoImage}
                         alt='photo_4'/>
               </figure>
               </div>
               <div className={styles.oneRow}>
               <figure>
                    <img src='https://s2.postimg.org/mqj38vaa1/IMG_7877.jpg' 
                         className={styles.photoImage}
                         alt='photo_5'/>
               </figure>
               </div>
            </div>
        )
    }
}

export default Team;