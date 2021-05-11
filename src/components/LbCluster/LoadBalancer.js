import React from 'react';
import { Card, Grid, Typography, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  mainContainer: {
    marginBottom: '10px',
  },
  square: {
    minWidth: '200px',
    maxWidth: '200px',
  },
}));

const LoadBalancer = (props) => {
  const { loadBalancer } = props;

  const classes = useStyles();

  return (
    <Grid item container display="flex" justify="center">
      <Card variant="outlined">
        <CardContent>
          <Typography>{loadBalancer.name}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default LoadBalancer;
