import React from 'react'

import Typography from '@material-ui/core/Typography'
import softSkills from '../assets/softSkills'
import Grid from '@material-ui/core/Grid'

import {
  makeStyles,
  createStyles,
  withStyles,
  Theme
} from '@material-ui/core/styles'
import LinearProgress from '@material-ui/core/LinearProgress'

const BorderLinearProgress = withStyles((theme: Theme) =>
  createStyles({
    root: {
      height: 10,
      borderRadius: 5
    },
    colorPrimary: {
      backgroundColor:
        theme.palette.grey[theme.palette.type === 'light' ? 200 : 700]
    },
    bar: {
      borderRadius: 5,
      backgroundColor: theme.palette.primary.main
    }
  })
)(LinearProgress)

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    textAlign: 'center'
  }
})

const splitIntoSubArray = (arr, count) => {
  var newArray = []
  while (arr.length > 0) {
    newArray.push(arr.splice(0, count))
  }
  return newArray
}

const SoftSkills: React.FC = () => {
  const classes = useStyles()
  const subArrays = splitIntoSubArray(softSkills, 5)
  return (
    <div className="section">
      <h2>Soft Skills</h2>
      <Grid container spacing={5}>
        {subArrays ? (
          subArrays.map((element, i) => {
            return (
              <Grid item xs={12} sm={6} key={i}>
                {element ? (
                  element.map((element2, i2) => {
                    return (
                      <div key={i2}>
                        <div className={classes.root}>
                          <Typography component="legend">
                            {element2.name}
                          </Typography>
                          <BorderLinearProgress
                            variant="determinate"
                            value={element2.rating}
                          />
                        </div>
                      </div>
                    )
                  })
                ) : (
                  <></>
                )}
              </Grid>
            )
          })
        ) : (
          <></>
        )}
      </Grid>
    </div>
  )
}

export default SoftSkills
