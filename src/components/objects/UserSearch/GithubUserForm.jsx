import React from 'react'
import {
  IconButton,
  TextField,
} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import { fade, makeStyles } from '@material-ui/core/styles'
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
  const classes = useStyles()
   const searchUser = dataForm => console.log(dataForm)
//   const searchUser = async dataForm => {
//     if(user!== ''){

//     }
//   }
// searchUser = async (user) => {
//     if (user !== "") {
//       try {
//         this.setState({ ...this.state, loading: true });
//         let dataFilled = await githubFetch.github.readUser(user);
//         let repos = await githubFetch.github.read(dataFilled.repos_url);
//         this.setState({ ...this.state, dataFilled, repos, loading: false });
//       } catch (error) {
//         this.cleanState();
//         this.sendAlert("An error has ocurried.");
//       }
//       return;
//     }
//     this.sendAlert("Please add an user for the search");
//   };

  return(
    <form className={classes.root} onSubmit={handleSubmit(searchUser)}>
      <IconButton>
        <SearchIcon/>
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