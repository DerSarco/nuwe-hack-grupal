import React, { useContext } from 'react'
import {
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@material-ui/core'
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles'
import { GithubUserContext } from '../../context/githubUserContext'
import { useForm } from 'react-hook-form'

const useStyles = makeStyles( theme => ({
  root:{
    display: 'flex',
    color: '#ffffff',
    borderRadius: theme.shape.borderRadius,
    margin:theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
      width: '100%',
    },
  },
  icon:{
    color: 'inherit',
  }
}))

const GithubUserForm = () => {
  const { register, handleSubmit, errors} = useForm()
  const [ githubUser, controller ] = useContext(GithubUserContext)

  // eslint-disable-next-line no-unused-vars
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
      controller.fetchUser(user)     
    }
  }
  return(
    <form className={classes.root} onSubmit={handleSubmit(searchUser)}>
      <FormControl fullWidth variant="outlined">
        <InputLabel color='secondary' htmlFor="search-bar">User</InputLabel>
        <OutlinedInput
          id="search-bar"
          endAdornment={<InputAdornment position="end"><SearchIcon className={classes.icon}/></InputAdornment>}
          error={errors?true:false}
          labelWidth={30}
          color='secondary'
          inputProps={{ ...register('user'), 'aria-label': 'search-user' }}
          fullWidth
          />
        </FormControl>
    </form>
  )
}

export default GithubUserForm