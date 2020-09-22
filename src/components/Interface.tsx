import React, { useEffect } from 'react'

export interface Props {
  color: string
  company: string
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

const Interface: React.FC<Props> = ({ color, company }) => {
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
        <HelloWorld companyName={company} />
        <WorkHistory />
        <Academic />
        <SoftSkills />
        <Languages />
        <Interests />
      </Container>
    </ThemeProvider>
  )
}

export default Interface
