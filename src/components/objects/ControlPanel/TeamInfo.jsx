import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { 
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@material-ui/core/'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const useStyles = makeStyles( theme => ({
  heading:{
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}))

const TeamInfo = ({ teamData }) => {

  const classes = useStyles()

  return (
    <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`${teamData.name}-data`}
          id={`${teamData.name}-header`}
        >
          <Typography className={classes.heading}>{teamData.name}</Typography>
        </AccordionSummary>
        <AccordionDetails>
            {teamData.users && teamData.users.map( user => {
              return(
                <Typography>
                  {user.username}
                </Typography>
              ) 
              })}
        </AccordionDetails>
      </Accordion>
  )
}

export default TeamInfo