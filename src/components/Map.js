import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';
import { mapsApiKey as key } from '../constants';
import Avatar from '@material-ui/core/Avatar';
import Tooltip from '@material-ui/core/Tooltip';
import ContentLoader from 'react-content-loader';

const Placeholder = props => (
  <ContentLoader
    height={540}
    width={400}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
    {...props}>
    <rect x="20" y="0" rx="4" ry="4" width="350" height="100" />
  </ContentLoader>
);

const MapLabel = ({ text, image }) => (
  <Tooltip title={`Hosted by ${text}`} placement="left">
    {image}
  </Tooltip>
);

class Map extends Component {
  render() {
    if (this.props.rsvps === undefined) return <Placeholder />;

    const host = this.props.rsvps.filter(
      rsvp => rsvp.member.event_context.host === true
    )[0];
    return (
      <div style={{ height: '250px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key }}
          defaultCenter={{
            lat: this.props.lat,
            lng: this.props.lon
          }}
          defaultZoom={13}>
          <MapLabel
            lat={this.props.lat}
            lng={this.props.lon}
            text={host.member.name}
            image={
              <Avatar
                alt={`Avatar ${host.member.name}`}
                src={host.member.photo.thumb_link}
              />
            }
          />
        </GoogleMapReact>
      </div>
    );
  }
}

Map.propTypes = {
  lat: PropTypes.number.isRequired,
  lon: PropTypes.number.isRequired,
  rsvps: PropTypes.array.isRequired
};

export default Map;
