import React from 'react'

import Typography from '@material-ui/core/Typography'
import softSkills from '../assets/softSkills'
import Grid from '@material-ui/core/Grid'

import { makeStyles } from '@material-ui/core/styles'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import { RadioButtonUnchecked, RadioButtonChecked } from '@material-ui/icons'

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    textAlign: 'center',
    margin: '0px 10px !important'
  },
  label: {
    marginLeft: '-9px !important',
    marginRight: '-9px !important'
  }
})

const SoftSkills: React.FC = () => {
  const classes = useStyles()
  return (
    <div className="section">
      <h2>Soft Skills</h2>
      <Grid container spacing={5} xs={12}>
        {softSkills ? (
          softSkills.map((element2, i2) => {
            return (
              <div className={classes.root}>
                <br />
                <Typography component="legend">{element2.name}</Typography>

                <FormControlLabel
                  control={
                    <Checkbox
                      checked={element2.rating >= 1}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<RadioButtonChecked />}
                      name="checkedH"
                    />
                  }
                  className={classes.label}
                  label=""
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={element2.rating >= 2}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<RadioButtonChecked />}
                      name="checkedH"
                    />
                  }
                  className={classes.label}
                  label=""
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={element2.rating >= 3}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<RadioButtonChecked />}
                      name="checkedH"
                    />
                  }
                  className={classes.label}
                  label=""
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={element2.rating >= 4}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<RadioButtonChecked />}
                      name="checkedH"
                    />
                  }
                  className={classes.label}
                  label=""
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={element2.rating >= 5}
                      icon={<RadioButtonUnchecked />}
                      checkedIcon={<RadioButtonChecked />}
                      name="checkedH"
                    />
                  }
                  className={classes.label}
                  label=""
                />
              </div>
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
