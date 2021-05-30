import React, { useContext } from 'react'
import {
  Box,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import RepoCard from './RepoCard'
import { GithubUserContext } from '../../context/githubUserContext'

const useStyles = makeStyles( theme => ({
  root: {
    minHeight: '80vh',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit,minmax(235px,1fr))',
    columnGap: 30,
    rowGap: 30,
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(6),
  },
}))

const ReposUsuario = () => {

  const classes = useStyles()
  const user = useContext(GithubUserContext)[0]

  return (
    <Box component='section' className={classes.root}>
      {user?.repos && user.repos.map( repo => {
        return <RepoCard key={`${repo.name}-${repo.id}`} data={repo} />
      })}
    </Box>
  ) 
}

export default ReposUsuario