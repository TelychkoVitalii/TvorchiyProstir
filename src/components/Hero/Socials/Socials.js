import React from 'react';
import styles from './Socials.css';

class Socials extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const socials = [
            { id: 1, img_url: '../../../../assets/inst.svg' , link: '#1' },
            { id: 2, img_url: '../../../../assets/face.svg' , link: '#2' },
            { id: 3, img_url: '../../../../assets/vk.svg' , link: '#3' }
        ];
        const socialsItem = socials.map( (item, index) => 
            <a key={index} href={item.link}>  
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