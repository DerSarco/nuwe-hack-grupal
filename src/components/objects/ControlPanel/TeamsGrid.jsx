import React, { useState, useEffect } from 'react'
import { 
  Box,
} from '@material-ui/core'
import fetchAPI from '../../functions/fetchAPI'
import { makeStyles } from '@material-ui/core/styles'
import TeamInfo from './TeamInfo'

const useStyles = makeStyles( theme => ({
  root:{

  }
}))

const TeamsGrid = () => {

  const classes = useStyles()
  const [ teams, setTeams ] = useState([])

  useEffect(()=>{
    const getTeams = () => {
      const teams = fetchAPI.API.getTeams()
      if(teams.length !== 0){
        setTeams(teams)
      }
    }
    getTeams()
  },[])

  return(
    <Box className={classes.root}>
      {teams.map( team => {
        return <TeamInfo data={team}/>
      })}
    </Box>
  )
}

export default TeamsGrid