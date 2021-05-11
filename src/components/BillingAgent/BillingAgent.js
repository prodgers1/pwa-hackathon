import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import dataAccessLayer from '../../data/dataAccessLayer';
import { TableContainer, Table, TableHead, TableRow, Paper, TableCell, TableBody } from '@material-ui/core';
import { format } from 'date-fns';
import parseJSON from 'date-fns/parseJSON';

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

const rows = dataAccessLayer.getBillingAgentData();

const BillingAgent = ({ isDashboard }) => {
  const classes = useStyles();
  if (!isDashboard) {
    return (
      <div>
        <h3>Billing Agent Status</h3>
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
      </div>
    );
  } else {
    return (
      <div>
        <span>Billing Agent</span>
        <div>Days below processing threshold: 2</div>
        <div>Total failure count: 2</div>
        <div>Today's delta: 50%</div>
      </div>
    );
  }
};

BillingAgent.propTypes = {
  isDashboard: PropTypes.bool,
};

export default BillingAgent;
