import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import Grid from '@material-ui/core/Grid';
import CalendarToday from '@material-ui/icons/CalendarToday';
import Business from '@material-ui/icons/Business';
import Map from './Map';

const Summary = ({ image, time, venue, rsvps }) => (
  <Grid container direction="row" alignItems="center">
    <Grid item xs={12} style={{ textAlign: 'center' }}>
      {image}
    </Grid>
    <Grid item xs={2}>
      <CalendarToday />
    </Grid>
    <Grid item xs={10}>
      {format(new Date(time), 'MMM D, YYYY h:mm A')}
    </Grid>
    <Grid item xs={2}>
      <Business />
    </Grid>
    <Grid item xs={10}>
      <a
        href={`https://www.google.com/maps/search/?api=1&query=${venue.name}+${
          venue.address_1
        }+${venue.address_2}+${venue.city}+${venue.state}`}>
        <p>
          <b>{venue.name}</b> <br />
          {venue.address_1} <br />
          {venue.address_2} <br />
          {venue.city},{' '}
          <span style={{ textTransform: 'uppercase' }}>
            {venue.state} {venue.zip}
          </span>{' '}
          <br />
        </p>
      </a>
    </Grid>
    <Grid item xs={12}>
      <Map
        lat={venue.lat}
        lon={venue.lon}
        location={<p>{venue.name}</p>}
        rsvps={rsvps}
      />
    </Grid>
  </Grid>
);

Summary.propTypes = {
  image: PropTypes.object.isRequired,
  time: PropTypes.number.isRequired,
  venue: PropTypes.object.isRequired,
  rsvps: PropTypes.array.isRequired
};

export default Summary;
