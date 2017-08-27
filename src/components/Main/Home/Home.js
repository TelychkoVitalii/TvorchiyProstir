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
	      autoplaySpeed: 2500
	    };

	    const sliderImages = [
	    	'https://s28.postimg.org/x1b191yrx/image.jpg',
	    	'https://s28.postimg.org/o7k4rybt9/geometria-63023133-photo.jpg',
	    	'https://s28.postimg.org/455uvkw99/geometria-63025464-photo.jpg',
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
		    )
	}
}

export default Home;
