import React, {Component} from 'react'
import mapboxgl from 'mapbox-gl'
import PropTypes from 'prop-types'
import './Map.css'

mapboxgl.accessToken = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA';

export default class Map extends Component {
  static propTypes = {
    property: PropTypes.object
  }

  constructor(props) {
      super(props);

      console.log(props.address)

      this.state = { 
        lat: 34.146079,
        lng: -118.562026,
        zoom: 7
      };
    }

  componentDidMount() {
  
    const { lng, lat, zoom } = this.state;

    this.map = new mapboxgl.Map({
        container: this.mapContainer,
        style: 'mapbox://styles/mapbox/streets-v9',
        center: [lng, lat],
        zoom
    });

    this.map.on('move', () => {
        const { lng, lat } = this.map.getCenter();

        this.setState({
          lng: lng.toFixed(4),
          lat: lat.toFixed(4),
          zoom: this.map.getZoom().toFixed(2)
        });
    });

    this.map.resize()
  }

  componentWillReceiveProps(nextProps) {
    const { property } = nextProps
    
    if (property && property.address) {
      const {address: { latitude, longitude}} = property
      this.map.flyTo({
        center: [longitude, latitude]
      })

      this.setState({lat: latitude, lng: longitude, zoom: 15})
    }
  }

  render() {
    return (
      <div id="map">
        <div ref={el => this.mapContainer = el} className="absolute top right left bottom" />
      </div>
    );
  }
}