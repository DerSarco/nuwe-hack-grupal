import React, { useState, useContext } from 'react'
import {
  IconButton,
  TextField,
} from '@material-ui/core'
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles'
import { GithubUserContext } from '../../context/githubUserContext'
import { useForm } from 'react-hook-form'

const useStyles = makeStyles( theme => ({
  root:{
    display: 'flex',
    borderRadius: theme.shape.borderRadius,
    margin:theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
      width: 'auto',
    },
    grow: {
      flexGrow: 1,
    }
  },
}))

const GithubUserForm = () => {
  const { register, handleSubmit, errors} = useForm()
  const [ githubUser, controller ] = useContext(GithubUserContext)
  const [ state, setState ] = useState({
    open: false,
    alertMessage: "",
    dataFilled: [],
    repos: [],
    loading: false,
  })
  const classes = useStyles()
  const searchUser = dataForm => {
    const { user } = dataForm 
    if( user && user !== githubUser.login){
      setState( prevState => {
        return({
          ...prevState,
          subbmitting: true,
        })
      })
      controller.fetchUser(user)
      setState( prevState => {
        return({
          ...prevState,
          subbmitting: false,
        })
      })
    }
  }
  return(
    <form className={classes.root} onSubmit={handleSubmit(searchUser)}>
      <IconButton>
      <Link to="/ControlPanel">
        <SearchIcon/>
      </Link>
      </IconButton>
      <div className={classes.grow}>
        <TextField
          error={errors?true:false}
          id="outlined-error-helper-text"
          label="User"
          helperText={errors?.text}
          inputProps={{ ...register('user'), 'aria-label': 'search-user' }}
          variant="outlined"
          color= 'secondary'
        />
      </div>
    </form>
  )
}

export default GithubUserForm