import React, { useState, useEffect } from 'react'

import { Grid, Paper } from '@material-ui/core'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import dataAccessLayer from '../../data/dataAccessLayer';

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

});


const Site247 = () => {
  const classes = useStyles();

  const [data, setData] = useState([]);

  useEffect(() => {
    let site247Data = dataAccessLayer.getSite24x7Alerts();
    setData(site247Data);
  }, [])

  return (
    <React.Fragment>
      <h1>Site 24x7</h1>
      {data.length > 0 && data.map((monitor, i) => (

        <Card variant="outlined" className={classes.mainCard} key={i}>
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

export default Site247;