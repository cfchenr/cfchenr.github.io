import React from 'react'
import { AiFillHeart } from 'react-icons/ai'

import {
  Theme,
  makeStyles,
  withStyles,
  createStyles
} from '@material-ui/core/styles'
import Badge from '@material-ui/core/Badge'
import Avatar from '@material-ui/core/Avatar'
import Typing from 'react-typing-animation'

export interface Props {
  companyName: string | string[]
}
const StyledBadge = withStyles((theme: Theme) =>
  createStyles({
    badge: {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: '$ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""'
      }
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0
      }
    }
  })
)(Badge)

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1)
      }
    },
    large: {
      width: theme.spacing(17),
      height: theme.spacing(17)
    }
  })
)

const HelloWorld: React.FC<Props> = ({ companyName }) => {
  const classes = useStyles()
  return companyName ? (
    <div className="section">
      <div className={classes.root}>
        <StyledBadge
          overlap="circle"
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right'
          }}
          variant="dot"
        >
          <Avatar
            alt="Cláudio Henriques"
            src="/images/0.jpeg"
            className={classes.large}
          />
        </StyledBadge>
      </div>
      <Typing speed={50}>
        <h1>&#60;Hello, {companyName}&#47;&#62;</h1>
      </Typing>{' '}
      <p>
        I'm <span>Cláudio</span> and i'm a software developer. I have a degree
        in <span>Mathematic and Applications</span>.
      </p>{' '}
      <p>
        My{' '}
        <span>
          <AiFillHeart />
        </span>{' '}
        have a crunch for <span>frontend</span> development but is in the{' '}
        <span>backend</span> when i can do some <span>magic</span> with code.
      </p>
    </div>
  ) : (
    <></>
  )
}

export default HelloWorld
