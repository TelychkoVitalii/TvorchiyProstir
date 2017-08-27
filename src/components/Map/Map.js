import React from 'react';
import styles from './Map.css';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';


class MapC extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
                center: { lat: 47.912925, lng: 33.417926 } ,
                zoom: 12,
                title: 'The Tvorchiy Prostir'
        };
    }

    onMarkerClick(mapProps, map, clickEvent)  {
        console.log(mapProps, map, clickEvent);
    }

    render() {
        setTimeout( () => console.clear(), 225 );
        
        return (
            <Map    google={this.props.google}
                    className={styles.MapContainer}
                    zoom={this.state.zoom}
                    initialCenter={ this.state.center } >
            
                <Marker onClick={ this.onMarkerClick }
                        title={this.state.title}  />
        
                 <InfoWindow onClose={this.onInfoWindowClose}>
                     <div>
                         <h1>{this.state.name}</h1>
                     </div>
                 </InfoWindow>
             </Map>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: ( 'AIzaSyBptkJz5eSusClZXLT-oud--sQTI6Sb_0Q')
})(MapC)
