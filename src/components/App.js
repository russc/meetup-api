import 'es6-promise/auto';
import 'babel-polyfill';
import React, { Component } from 'react';
import styled from 'styled-components';
import { meetupApikey } from '../constants';
import fetchJsonp from 'fetch-jsonp';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Members from './Members';
import Details from './Details';
import Summary from './Summary';
import PlaceHolders from './PlaceHolders';

const StyledPaper = styled(Paper)`
  padding: ${props => props.padding};
`;

const GroupImg = styled.img`
  border-radius: 50%;
`;

class App extends Component {
  state = { loading: true, details: false };

  async componentDidMount() {
    // Get the upcoming meetup
    const eventsResponse = await fetchJsonp(
      `https://api.meetup.com/reactjs-dallas/events?sign=true&photo-host=public&page=1&key=${meetupApikey}`
    );
    const { data: upcoming } = await eventsResponse.json();

    // Use the ID from the upcoming meetup to get the RSVP array
    const rsvpsResponse = await fetchJsonp(
      `https://api.meetup.com/reactjs-dallas/events/${
        upcoming[0].id
      }/rsvps?&sign=true&photo-host=public&key=${meetupApikey}`
    );
    const { data: rsvps } = await rsvpsResponse.json();

    // Add RSVP array to the upcoming meetup object
    upcoming[0].rsvps = rsvps;

    // Update state with meetup object
    this.setState({ loading: false, ...upcoming[0] });
  }
  render() {
    // Desctructure main items
    const { loading, rsvps } = this.state;
    // Render content placeholders while awaiting data
    if (loading) return <PlaceHolders />;

    return (
      <Grid container direction="row" spacing={24}>
        <Grid item xs={12}>
          <h1>{this.state.name}</h1>
        </Grid>

        <Grid item xs={12} md={8}>
          <StyledPaper elevation={3} padding="3rem">
            <Details
              name={this.state.name}
              description={this.state.description}
            />
          </StyledPaper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <StyledPaper elevation={3} padding="1rem">
            <Summary
              image={
                <GroupImg
                  width="200px"
                  src={rsvps[0].group.group_photo.highres_link}
                  alt="Stained glass react design"
                />
              }
              {...this.state}
            />
          </StyledPaper>
        </Grid>
        <Grid item xs={12} sm={6} md={8}>
          <Grid item xs={12}>
            <StyledPaper elevation={3} padding="0 2rem">
              <Members people={rsvps} />
            </StyledPaper>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default App;
