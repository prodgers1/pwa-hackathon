import React, { useState, useEffect } from 'react';
import dataAccessLayer from '../../data/dataAccessLayer';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'center',
  },
  container: {
    margin: '1em',
    backgroundColor: "#eeeeee",
    
    padding: '1em',
    border: '1px solid #ddd',
    borderRadius: '.3em',

    minWidth: 240,
  },
  table: {
    minWidth: 650,
  },
  title: {
    fontSize: '1.1em',
    fontWeight: 'bold',
  },
  green: {
    color: '#39C16C',
  },
  red: {
    color: '#db1802'
  }
});

const SCOM = () => {
  const classes = useStyles();
  const [data, setData] = useState([]);

  useEffect(() => {
    let scomData = dataAccessLayer.getSCOMAlerts();
    setData(scomData);
  }, []);

  return (
    <div className={classes.root}>
      {data.length < 1 && (
        <h1 className={classes.green}>SCOM</h1>
      )}

      {data.length > 0 && (
        <React.Fragment>
          <h1 className={classes.red}>SCOM</h1>
          <div className={classes.container}>
          
            <TableContainer component={Paper}>
              <Table className={classes.table}>

                <TableHead>
                  <TableRow>
                    <TableCell className={classes.title}>Name</TableCell>
                    <TableCell className={classes.title}>Description</TableCell>
                    <TableCell className={classes.title}>Source</TableCell>
                    <TableCell className={classes.title} align="right">Create Date</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {data.length > 0 && data.map((alert) => (
                    <TableRow key={`key-${alert.id}-${alert.source}`}>
                      <TableCell>{alert.name}</TableCell>
                      <TableCell>{alert.description}</TableCell>
                      <TableCell>{alert.source}</TableCell>
                      <TableCell align="right">{alert.createDate}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>

              </Table>
            </TableContainer>

          </div>
        </React.Fragment>
      )}

    </div>
  );
}

export default SCOM;