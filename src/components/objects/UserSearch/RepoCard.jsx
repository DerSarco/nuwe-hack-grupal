import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Paper,
  Typography,
} from '@material-ui/core'

const useStyles = makeStyles( theme => ({
  root:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(8),
  },
}))

const RepoCard = ({ data }) => {

  const classes = useStyles()

  return (
    <Paper className={classes.root}>
      <Typography variant="subtitle1" component="p" color='primary' >
        {data.name}
      </Typography>
      <Typography variant="subtitle2" component="p" color='primary' >
        {data.id}
      </Typography>
    </Paper>
  )
}

export default RepoCard