import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
//import dataAccessLayer from '../../data/dataAccessLayer';
import { TableContainer, Table, TableHead, TableRow, Paper,  TableCell, TableBody} from '@material-ui/core';

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

const rows = [];

const BillingAgent = ({ isDashboard }) => {
  const classes = useStyles();
  if(!isDashboard){
  return (
    <div>  
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
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
              <TableCell component="th" scope="row">{row.date}</TableCell>
              <TableCell align="right">{row.billingTransactions}</TableCell>
              <TableCell align="right">{row.batchSum}</TableCell>
              <TableCell align="right">{row.inProgress}</TableCell>
              <TableCell align="right">{row.success}</TableCell>
              <TableCell align="right">{row.failed}</TableCell>
              <TableCell align="right">{row.total}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>  
    </div>
  );
          }
          else{
            return (
            <span>Dashboard!</span>
            )
          }
};

BillingAgent.propTypes = {
  isDashboard: PropTypes.bool,
};

export default BillingAgent;
