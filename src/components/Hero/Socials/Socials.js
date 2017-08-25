import React from 'react';
import styles from './Socials.css';

class Socials extends React.Component {
    
    render() {
        const socials = [
            { id: 1, img_url: '../../../../assets/inst.svg' , link: 'https://www.facebook.com/tvorchiy.prostir' },
            { id: 2, img_url: '../../../../assets/face.svg' , link: 'https://www.facebook.com/tvorchiy.prostir' },
            { id: 3, img_url: '../../../../assets/vk.svg' , link: 'https://www.facebook.com/tvorchiy.prostir' }
        ];
        const socialsItem = socials.map( (item, index) => 
            <a key={index} href={item.link} target="_blank">  
                <img src={item.img_url} alt={item.id}/>
            </a>);
        return (
            <div className={styles.heroSocials}> 
                { socialsItem }
            </div>
        )
    }
}

export default Socials;