import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ContentLoader from 'react-content-loader';

const Header = props => (
  <ContentLoader
    height={40}
    width={400}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
    {...props}>
    <rect x="0" y="15" rx="4" ry="4" width="117" height="15" />
  </ContentLoader>
);
const Main = props => (
  <ContentLoader
    height={260}
    width={400}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
    {...props}>
    <rect x="20" y="35" rx="3" ry="3" width="85" height="6.4" />
    <rect x="20" y="80" rx="3" ry="3" width="350" height="6.4" />
    <rect x="20" y="100" rx="3" ry="3" width="350" height="6.4" />
    <rect x="20" y="120" rx="3" ry="3" width="350" height="6.4" />
    <rect x="20" y="140" rx="3" ry="3" width="350" height="6.4" />
    <rect x="20" y="160" rx="3" ry="3" width="350" height="6.4" />
    <rect x="20" y="180" rx="3" ry="3" width="350" height="6.4" />
    <rect x="20" y="200" rx="3" ry="3" width="350" height="6.4" />
    <rect x="20" y="220" rx="3" ry="3" width="350" height="6.4" />
    <rect x="20" y="240" rx="3" ry="3" width="350" height="6.4" />
  </ContentLoader>
);

const Side = props => (
  <ContentLoader
    height={540}
    width={400}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
    {...props}
  >
    <rect x="20" y="290" rx="4" ry="4" width="350" height="100" />
    <rect x="20" y="410" rx="4" ry="4" width="350" height="100" />
    <circle cx="200" cy="150" r="130" />
  </ContentLoader>
)
const PlaceHolders = () => (
  <Grid container direction="row" spacing={24}>
    <Grid item xs={12}>
      <Header />
    </Grid>
    <Grid item xs={12} md={8}>
      <Paper elevation={3}>
        <Main />
      </Paper>
    </Grid>
    <Grid item xs={12} sm={6} md={4}>
      <Paper elevation={3}><Side/></Paper>
    </Grid>
    <Grid item xs={12} sm={6} md={8}>
      <Grid item xs={12}>
        <Paper elevation={3} />
      </Grid>
    </Grid>
  </Grid>
);

export default PlaceHolders;
