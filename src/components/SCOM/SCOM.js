import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import dataAccessLayer from '../../data/dataAccessLayer';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { format } from 'date-fns';
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
  table: {
    minWidth: 650,
  },
  columnHeader: {
    fontSize: '1.1em',
    fontWeight: 'bold',
  },
  dashboardTitle: {
    marginTop: 0,
  },
  bold: {
    fontWeight: 'bold',
  },
  // alert: {
  //   color: '#db1802', // red
  //   fontWeight: 'bold',
  // },
  link: {
    color: '#000000',
    textDecoration: "none"
  }
});

const SCOM = ({ isDashboard }) => {
  const classes = useStyles();
  const [data, setData] = useState([]);

  useEffect(() => {
    let scomData = dataAccessLayer.getSCOMAlerts();
    setData(scomData);
  }, []);

  if (isDashboard) {

    return(
      <div className={classes.root}>
        <div className={classes.container}>

          {data.length < 1 && (
            <h3 className={classes.green}>SCOM</h3>
          )}

          {data.length > 0 && (
            <React.Fragment>
              <h3 className={classes.dashboardTitle}>SCOM ({data.length} Active Alerts)</h3>
              <Link to="/scom" className={classes.link}>
              {data.length > 0 && data.map((alert) => (
                <Grid key={`dashboard-${alert.id}-${alert.source}`} className={classes.card}>
                  <div><span className={classes.bold}>{alert.name}</span> on <span className={classes.bold}>{alert.source}</span> ({format(parseJSON(alert.createDate), 'h:mmaaa')})</div>
                </Grid>
              )).slice(0,5)}
              <div>...</div>
              </Link>
            </React.Fragment>
          )}

        </div>
      </div>
    )

  } else {

    return (
      <div className={classes.root}>

        {data.length < 1 && (
          <h2 className={classes.green}>No active SCOM alerts!</h2>
        )}
  
        {data.length > 0 && (
          <React.Fragment>
            <h2>SCOM</h2>
            <div className={classes.container}>
            
              <TableContainer component={Paper}>
                <Table className={classes.table}>
  
                  <TableHead>
                    <TableRow>
                      <TableCell className={classes.columnHeader}>Name</TableCell>
                      <TableCell className={classes.columnHeader}>Description</TableCell>
                      <TableCell className={classes.columnHeader}>Source</TableCell>
                      <TableCell className={classes.columnHeader} align="right">Create Date</TableCell>
                    </TableRow>
                  </TableHead>
  
                  <TableBody>
                    {data.length > 0 && data.map((alert) => (
                      <TableRow key={`desktop-${alert.id}-${alert.source}`}>
                        <TableCell>{alert.name}</TableCell>
                        <TableCell>{alert.description}</TableCell>
                        <TableCell>{alert.source}</TableCell>
                        <TableCell align="right">{format(parseJSON(alert.createDate), 'MM/dd/yyyy hh:mm:ss aa')}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
  
                </Table>
              </TableContainer>
  
            </div>
          </React.Fragment>
        )}
  
      </div>
    )

  }
}

export default SCOM;