import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';

import { Grid, Paper } from '@material-ui/core'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import dataAccessLayer from '../../data/dataAccessLayer';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import {
  Link
} from "react-router-dom";

const useStyles = makeStyles({
  root: {
    minWidth: 240,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold"
  },
  pos: {
    marginBottom: 12,
    fontWeight: "bold",
    fontSize: 15
  },
  container: {
    margin: '1em',
    backgroundColor: "#eeeeee",

    padding: '1.25em',
    border: '1px solid #ddd',
    borderRadius: '.3em',

    minWidth: 240,
  },
  card: {
    textAlign: 'start'
  },
  mainCard: {
    marginTop: "4rem",
    marginBottom: "4rem",
    marginLeft: "1rem",
    marginRight: "1rem",
    backgroundColor: "#eeeeee"

  },
  error: {
    color: "#f44336"
  },
  alive: {
    color: "#4caf50"
  },
  green: {
    color: "#4caf50"
  },
  yellow: {
    color: "#ffeb3b"
  },
  orange: {
    color: "#ff9800"
  },
  red: {
    color: "#f44336"
  },
  link: {
    textDecoration: "none"
  }
});


const Site24x7 = ({ isDashboard }) => {
  const classes = useStyles();

  const [data, setData] = useState([]);

  useEffect(() => {
    let site247Data = dataAccessLayer.getSite24x7Alerts();
    setData(site247Data);
  }, [])

  const isAlive = (monitor) => {
    return monitor.downtimes == 0;
  }

  if (!isDashboard) {
    return (
      <React.Fragment>

        <h1>Site 24x7</h1>
        {data.length > 0 && data.map((monitor, i) => (

          <Card variant="outlined" key={i} className={classes.mainCard}>
            <CardContent >
              <Grid container item justify="center" alignItems="center">
                <Grid container item justify="center">
                  <h2>{monitor.name}</h2>
                </Grid>

                <Grid container item spacing={3} direction="row" justify="center">
                  <Grid item className={classes.card}>
                    <MetricCard metricName="Availability" metricValue={monitor.availability} />
                  </Grid>
                  <Grid item className={classes.card}>
                    <MetricCard metricName="Response Time" metricValue={monitor.responseTime} />
                  </Grid>
                  <Grid item className={classes.card}>
                    <MetricCard metricName="Downtimes" metricValue={monitor.downtimes} />
                  </Grid>
                  <Grid item className={classes.card}>
                    <MetricCard metricName="Last Polled" metricValue={monitor.lastPolled} />
                  </Grid>
                </Grid>

              </Grid>
            </CardContent>
          </Card>

        ))}

      </React.Fragment>
    )
  }
  else {
    return (
      <React.Fragment>
        <div className={classes.container}>
          <h1>Site 24x7</h1>
          <Grid container direction="row" spacing={3} justify="center">
            {data.length > 0 && data.map((monitor, i) => (

              <Grid item>
                <Link to='/site24x7' className={classes.link}>
                  <Card variant="outlined" key={i}>
                    <CardContent>
                      <h3>{monitor.name}</h3>

                      {isAlive(monitor) && (
                        <CheckCircleIcon fontSize="large" className={classes.alive} />
                      )}

                      {!isAlive(monitor) && (
                        <ErrorIcon fontSize="large" className={classes.error} />
                      )}

                    </CardContent>
                  </Card>
                </Link>
              </Grid>
            ))}
          </Grid>
        </div>
      </React.Fragment>

    )
  }
}

const MetricCard = ({ metricName, metricValue }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.pos} color="textSecondary" gutterBottom>
          {metricName.toUpperCase()}
        </Typography>
        <Typography className={classes.title}>
          {metricValue}
        </Typography>
      </CardContent>
    </Card>
  )
}

Site24x7.propTypes = {
  isDashboard: PropTypes.bool,
};


export default Site24x7;