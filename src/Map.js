import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken='pk.eyJ1Ijoiam9zZXBhbnNhYmF0ZSIsImEiOiJja21kejl5bHUxdzhoMnBwaDg0YjJ1bDRxIn0.fVRAXWvmIKHZ-4igiQQeRg'

class Mapp extends Component{
    constructor(props){
        super(props);
        this.state = {
            lng: 10,
            lat: 80,
            zoom: 4
        }
    }
    componentDidMount() {
        const map = new mapboxgl.Map({
        container: this.mapContainer,
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: [this.state.lng, this.state.lat],
        zoom: this.state.zoom
        })
    }
    render(){
        return(
            <div>
                <div ref={el => this.mapContainer = el} style={{width:'100%', height:'100vh'}}/>
            </div>
        )
    }
}

export default Mapp;