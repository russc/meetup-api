import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

const NoPhoto = styled.div`
  align-items: center;
  background: #54c7ec;
  border: 3px solid
    ${props =>
      props.response === 'yes'
        ? '#b0f3b0'
        : props.response === 'no'
        ? '#f59999'
        : props.response === 'waitlist' && '#5e5ee6'};
  border-radius: 50%;
  display: flex;
  font-size: 44px;
  font-weight: 700;
  height: 100px;
  justify-content: center;
  margin: auto;
  width: 100px;
`;

const Avatar = styled.img`
  border: 3px solid
    ${props =>
      props.response === 'yes'
        ? '#b0f3b0'
        : props.response === 'no'
        ? '#f59999'
        : props.response === 'waitlist' && '#5e5ee6'};
  height: 100px;
  width: 100px;
  border-radius: 50%;
  object-fit: cover;
`;

const styles = theme => ({
  toggleContainer: {
    height: 56,
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: `${theme.spacing.unit}px 0`
  }
});
class Members extends Component {
  state = {
    status: 'yes'
  };
  getInitials = (name, response) => {
    var matches = name.match(/\b(\w)/g);
    var initials = matches.join('');

    return (
      <NoPhoto response={response}>
        <p>{initials}</p>
      </NoPhoto>
    );
  };

  handleStatus = (event, status) => {
    if (status !== null) {
      this.setState({ status });
    }
  };

  render() {
    const { people, classes } = this.props;
    return (
      <Grid
        container
        direction="row"
        justify="center"
        style={{ textAlign: 'center' }}>
        <Grid item xs={12}>
          <h2>Members Attending</h2>
        </Grid>
        <Grid item xs={12}>
          <div className={classes.toggleContainer}>
            <ToggleButtonGroup
              value={this.state.status}
              exclusive
              onChange={this.handleStatus}>
              <ToggleButton value="yes">Yes</ToggleButton>
              <ToggleButton value="waitlist">Waitlist</ToggleButton>
              <ToggleButton value="no">No</ToggleButton>
            </ToggleButtonGroup>
          </div>
        </Grid>
        <Grid item xs={12}>
          <Grid container direction="row">
            {people
              .filter(person => person.response === this.state.status)
              .map(person => (
                <Grid item xs={12} md={3} lg={2} key={person.member.id}>
                  {person.member.photo ? (
                    <Avatar
                      alt={`Avatar ${person.member.name}`}
                      src={person.member.photo.photo_link}
                      response={person.response}
                    />
                  ) : (
                    this.getInitials(person.member.name, person.response)
                  )}
                  <p style={{textTransform: "uppercase"}}>{person.member.name}</p>
                </Grid>
              ))}
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

Members.propTypes = {
  people: PropTypes.array.isRequired
};

export default withStyles(styles)(Members);
