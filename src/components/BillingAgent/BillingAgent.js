import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
//import dataAccessLayer from '../../data/dataAccessLayer';
import { Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    padding: '0 2em',
  },
  contentGrid: {
    padding: '2em',
  },
  unlockedGrid: {
    padding: '1em',
  },
}));

const MyRecognition = ({ user }) => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.root}>
        <Typography variant="h2">Billing Agent</Typography>
      </div>

      <Grid className={classes.contentGrid} direction="row" container>

      </Grid>
    </div>
  );
};

MyRecognition.propTypes = {
  user: PropTypes.string,
};

export default MyRecognition;
