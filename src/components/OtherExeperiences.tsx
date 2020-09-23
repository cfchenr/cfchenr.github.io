import React from 'react'

import Timeline from '@material-ui/lab/Timeline'
import TimelineItem from '@material-ui/lab/TimelineItem'
import TimelineSeparator from '@material-ui/lab/TimelineSeparator'
import TimelineConnector from '@material-ui/lab/TimelineConnector'
import TimelineContent from '@material-ui/lab/TimelineContent'
import TimelineDot from '@material-ui/lab/TimelineDot'
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent'
import Typography from '@material-ui/core/Typography'
import otherExeperiences from '../assets/otherExeperiences'
import Chip from '@material-ui/core/Chip'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

import { Today, Place, Work } from '@material-ui/icons'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(0.5)
      }
    }
  })
)
const OtherExeperiences: React.FC = () => {
  const classes = useStyles()
  return (
    <div className="section">
      <h2>Other Exeperiences</h2>
      <Timeline align="alternate">
        {otherExeperiences ? (
          otherExeperiences.map((element, i) => {
            return (
              <TimelineItem key={i}>
                <TimelineOppositeContent>
                  <Typography variant="subtitle1">
                    <Today />
                    <span> </span>
                    {element.startDate} - {element.endDate}
                  </Typography>
                  <Typography variant="subtitle1">
                    <Place />
                    <span> </span>
                    in {element.local}
                  </Typography>
                  {element.website ? (
                    <Typography>
                      <a
                        target="_blank"
                        href={
                          element.website.includes('http://')
                            ? element.website
                            : 'http://' + element.website
                        }
                      >
                        {element.website}
                      </a>
                    </Typography>
                  ) : (
                    <></>
                  )}
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="h5">
                    <Work />
                    <span> </span>
                    {element.job}
                  </Typography>
                  <Typography color="primary" variant="h6">
                    {element.name} @ {element.company}
                  </Typography>
                  <div className={classes.root}>
                    {element.tags?.map((element2, i) => {
                      return <Chip label={element2} color="secondary" key={i} />
                    })}
                  </div>
                </TimelineContent>
              </TimelineItem>
            )
          })
        ) : (
          <></>
        )}
      </Timeline>
    </div>
  )
}

export default OtherExeperiences
