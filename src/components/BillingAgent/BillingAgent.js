import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import dataAccessLayer from '../../data/dataAccessLayer';
import { TableContainer, Table, TableHead, TableRow, Paper, TableCell, TableBody, Grid } from '@material-ui/core';
import { format, differenceInDays } from 'date-fns';
import parseJSON from 'date-fns/parseJSON';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'center',
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
    padding: '1em',
    backgroundColor: '#fff',
    border: '1px solid #ededed',
    borderRadius: '.3em',
  },
  dashboardTitle: {
    marginTop: 0,
  },
  link: {
    color: '#000000',
    textDecoration: "none"
  },
  bold: {
    fontWeight: 'bold',
  }
});

const rows = dataAccessLayer.getBillingAgentData();

const BillingAgent = ({ isDashboard }) => {
  const classes = useStyles();
  if (!isDashboard) {
    return (
      <React.Fragment>
        <h2>Billing Agent Status</h2>
        <TableContainer component={Paper}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell align="right">Billing&nbsp;Transactions</TableCell>
                <TableCell align="right">Batch&nbsp;Sum</TableCell>
                <TableCell align="right">In&nbsp;Progress</TableCell>
                <TableCell align="right">Success</TableCell>
                <TableCell align="right">Failed</TableCell>
                <TableCell align="right">Total</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.date}>
                  <TableCell component="th" scope="row">
                    {format(parseJSON(row.date), 'MM/dd/yyyy')}
                  </TableCell>
                  <TableCell align="right">{row.transactionCount}</TableCell>
                  <TableCell align="right">{row.batchCount}</TableCell>
                  <TableCell align="right">{row.inProgessCount}</TableCell>
                  <TableCell align="right">{row.successCount}</TableCell>
                  <TableCell align="right">{row.failureCount}</TableCell>
                  <TableCell align="right">{row.queueTotal}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </React.Fragment>
    );
  } else {
    var threshold = 0.5;
    var belowThreshold = 0;
    var failureCount = 0;
    var currentDelta = 0.0;

    rows.forEach((row) => {
      if (row.transactionCount > 0) {
        if (row.queueTotal / row.transactionCount < threshold) {
          belowThreshold++;
        }

        if (differenceInDays(parseJSON(row.date), new Date()) === 0) {
          currentDelta = (row.queueTotal / row.transactionCount) * 100;
        }

        failureCount = failureCount + row.failureCount;
      }
    });
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <h3 className={classes.dashboardTitle}>Billing Agent (4 day aggregate)</h3>
          <Link to="/billingAgent" className={classes.link}>
            <Grid className={classes.card}>
              Days below processing threshold - <span className={classes.bold}>{belowThreshold}</span>
            </Grid>
            <Grid className={classes.card}>
              Total failure count - <span className={classes.bold}>{failureCount}</span>
            </Grid>
            <Grid className={classes.card}>
              Today's delta - <span className={classes.bold}>{currentDelta.toFixed(0) + '%'}</span>
            </Grid>
          </Link>
        </div>
      </div>
    );
  }
};

BillingAgent.propTypes = {
  isDashboard: PropTypes.bool,
};

export default BillingAgent;
