import React, { useContext, useEffect } from 'react'
import {
  Box,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import UserCard from './UserCard'
import { GithubUserContext } from '../../context/githubUserContext'

const useStyles = makeStyles( theme => ({
  root: {
    minHeight: '80vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(6),
  },
}))

const UsuarioSeleccionado = () => {

  const classes = useStyles()
  const usuario = useContext(GithubUserContext)[0]



  return(
    <Box component='section' className={classes.root}>
    { usuario && ( 
      <UserCard data={usuario}/>
    )}
    </Box>
  )
}

export default UsuarioSeleccionado