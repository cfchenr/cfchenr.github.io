import React from 'react'

import Rating from '@material-ui/lab/Rating'
import Typography from '@material-ui/core/Typography'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import softSkills from '../assets/softSkills'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      textAlign: 'center'
    }
  })
)

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
      <div className={classes.root}>
        <Grid container spacing={5}>
          {subArrays ? (
            subArrays.map((element, i) => {
              return (
                <Grid item xs={12} sm={3} key={i}>
                  {element ? (
                    element.map((element2, i2) => {
                      return (
                        <div key={i2}>
                          <Typography component="legend">
                            {element2.name}
                          </Typography>
                          <Rating
                            name="read-only"
                            value={element2.rating}
                            readOnly
                          />
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
    </div>
  )
}

export default SoftSkills
