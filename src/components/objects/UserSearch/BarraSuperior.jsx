import React from 'react'
import GithubUserForm from './GithubUserForm'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import { 
  AppBar,
  IconButton,
  Toolbar,
  Typography,
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

const BarraSuperior = () => {

  const classes = useStyles()  

  return (
    <div className={classes.grow}>
      <AppBar position="sticky">
        <Toolbar>
          <GithubUserForm/>
          <div className={classes.grow} />
          <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={'search-github-user'}
              aria-haspopup="true"
              onClick={()=>console.log('Apretaste el boton de cuenta, me falta agregar un menu acá :D')}
              color="inherit"
            >
              <AccountCircleIcon />
            </IconButton>
          </Toolbar>
      </AppBar>
    </div>
  )
}

export default BarraSuperior

