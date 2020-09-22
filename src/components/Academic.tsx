import React from 'react'

import Timeline from '@material-ui/lab/Timeline'
import TimelineItem from '@material-ui/lab/TimelineItem'
import TimelineSeparator from '@material-ui/lab/TimelineSeparator'
import TimelineConnector from '@material-ui/lab/TimelineConnector'
import TimelineContent from '@material-ui/lab/TimelineContent'
import TimelineDot from '@material-ui/lab/TimelineDot'
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent'
import Typography from '@material-ui/core/Typography'
import academic from '../assets/academic'
import { Today, LibraryBooks } from '@material-ui/icons'

const Academic: React.FC = () => {
  return (
    <div className="section">
      <h2>Academic</h2>
      <Timeline align="alternate">
        {academic ? (
          academic.map((element, i) => {
            return (
              <TimelineItem key={i}>
                <TimelineOppositeContent>
                  <Typography variant="h5">
                    <Today />
                    <span> </span>
                    {element.startDate} - {element.endDate}
                  </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="h5" color="primary">
                    <LibraryBooks />
                    <span> </span>
                    {element.name}
                  </Typography>
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

export default Academic
