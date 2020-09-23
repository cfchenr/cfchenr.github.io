import React, { useEffect } from 'react'

export interface Props {
  color: string
  world: string
}

import { ThemeProvider } from '@material-ui/styles'
import { createMuiTheme } from '@material-ui/core/styles'

import { Container } from '../styles/pages'
import HelloWorld from './HelloWorld'
import Interests from './Interests'
import WorkHistory from './WorkHistory'
import Academic from './Academic'
import SoftSkills from './SoftSkills'
import Languages from './Languages'
import OtherExeperiences from './OtherExeperiences'
import CarrerPath from './CarrerPath'
import Grid from '@material-ui/core/Grid'

const Interface: React.FC<Props> = ({ color, world }) => {
  const theme = createMuiTheme({
    palette: {
      primary: {
        // Purple and green play nicely together.
        main: ('#' + color) as string
      },
      contrastThreshold: 3
    },
    typography: {
      // Em chinês e japonês os caracteres são geralmente maiores,
      // então um tamanho de letra menor pode ser apropriado.
      fontSize: 12
    }
  })
  theme.palette.secondary.main = theme.palette.getContrastText(
    theme.palette.primary.main
  )

  useEffect(() => {
    document.documentElement.style.setProperty(
      '--primary',
      ('#' + color) as string
    )
  }, [color])

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <HelloWorld world={world} />
        <Grid container>
          <Grid item xs={12} sm={6}>
            <WorkHistory />
          </Grid>
          <Grid item xs={12} sm={6}>
            <OtherExeperiences />
          </Grid>
        </Grid>
        <Academic />
        <SoftSkills />
        <Languages />
        <CarrerPath />
        <Interests />
      </Container>
    </ThemeProvider>
  )
}

export default Interface
