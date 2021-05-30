import React from 'react'
import { Link } from 'react-router-dom'
import SettingsIcon from '@material-ui/icons/Settings';
import { 
  AppBar,
  IconButton,
  Toolbar,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles( theme => ({
  grow:{
    flexGrow: 1,
  },
  inputRoot:{
    color: 'inherit',
  },
}))

const BarraSuperior = ({ children }) => {

  const classes = useStyles()  

  return (
    <div className={classes.grow}>
      <AppBar position="sticky">
        <Toolbar>
          { children }
          <div className={classes.grow} />
          <Link to='/ControlPanel'>
              <IconButton
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={'search-github-user'}
                  aria-haspopup="true"              
              >
              <SettingsIcon />
            </IconButton>
            </Link>
          </Toolbar>
      </AppBar>
    </div>
  )
}

export default BarraSuperior

