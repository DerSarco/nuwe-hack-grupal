import React from 'react'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
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
          <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={'search-github-user'}
              aria-haspopup="true"
              onClick={()=>console.log('Apretaste el boton de cuenta, me falta agregar un menu acá :D')}
              color="inherit"
              fullWidth
            >
              <AccountCircleIcon />
            </IconButton>
          </Toolbar>
      </AppBar>
    </div>
  )
}

export default BarraSuperior

