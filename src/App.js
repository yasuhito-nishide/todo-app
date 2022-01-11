
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import Button from '@material-ui/core/Button';

import './App.css';

function App() {
  const useStyles = makeStyles(theme => ({
    root: {
      padding: theme.spacing(3, 2),
    },
  }));
 
  const classes = useStyles();
  const[text, setText] = useState("Text Before changed")

  return (
    <div className="App">
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
          Sample Component
        </Typography>
        <Typography component="p"> {text} </Typography>
 
        <Button variant="contained" color="primary" onClick={() => setText('Button pressed!')} >
 
          PRESS HERE!
 
        </Button>
 
      </Paper>
    </div>
  );
}
 
export default App;