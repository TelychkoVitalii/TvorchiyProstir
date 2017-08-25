import React from 'react';
import ReactDOM from 'react-dom';
import Slider from 'react-slick';
import styles from './Home.css';

class Home extends React.Component {
  
    render() {
    	const settings = {
	      infinite: true,
	      slidesToShow: 1,
	      slidesToScroll: 1,
	      autoplay: true,
	      autoplaySpeed: 4500
	    };

	    const sliderImages = [
	    	'https://s4.postimg.org/hr1jetjkt/geometria-61748968-photo.jpg',
	    	'https://s4.postimg.org/ueharbyhp/geometria-61749154-photo.jpg',
	    	'https://s4.postimg.org/c1gpgro0t/geometria-61749254-photo.jpg',
	    	'https://s4.postimg.org/ph3q67wil/geometria-61764100-photo.jpg'
	    ];

	    const images = sliderImages.map((url) => 
	    		<div>
					<img src={url} className={styles.images} />
				</div>
	    	)

        return (
            <Slider {...settings}>
		        {images}
		    </Slider>
	}

export default Home;
