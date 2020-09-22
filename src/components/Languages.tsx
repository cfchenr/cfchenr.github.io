import React from 'react'

import languages from '../assets/languages'
import Grid from '@material-ui/core/Grid'

import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'

import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const Languages: React.FC = () => {
  const useStyles = makeStyles({
    root: {
      flexGrow: 1,
      textAlign: 'center'
    },
    disabled: {
      color: '#fff !important'
    }
  })
  const classes = useStyles()

  return (
    <div className="section">
      <h2>Languages</h2>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={3}></Grid>
        <Grid item xs={12} sm={6}>
          {languages ? (
            languages.map((element, i) => {
              return (
                <div key={i} className={classes.root}>
                  <br />
                  <Typography component="legend">{element.name}</Typography>
                  <FormControl component="fieldset" key={i}>
                    <RadioGroup
                      aria-label="gender"
                      name="gender1"
                      value={element.rating}
                      row
                    >
                      <FormControlLabel
                        value="0"
                        classes={{
                          disabled: classes.disabled // nome da classe, p.ex. `disabled-x`
                        }}
                        control={<Radio />}
                        label="Written"
                        disabled
                      />
                      <FormControlLabel
                        value="1"
                        classes={{
                          disabled: classes.disabled // nome da classe, p.ex. `disabled-x`
                        }}
                        control={<Radio />}
                        label="Spoken (+ Written)"
                        disabled
                      />
                      <FormControlLabel
                        value="2"
                        classes={{
                          disabled: classes.disabled // nome da classe, p.ex. `disabled-x`
                        }}
                        control={<Radio />}
                        label="Native"
                        disabled
                      />
                    </RadioGroup>
                  </FormControl>
                </div>
              )
            })
          ) : (
            <></>
          )}
        </Grid>
      </Grid>
    </div>
  )
}

export default Languages
