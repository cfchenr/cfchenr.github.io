import React from 'react'
import { AiFillHeart } from 'react-icons/ai'

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import Typing from 'react-typing-animation'

export interface Props {
  companyName: string | string[]
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1)
      }
    },
    large: {
      width: theme.spacing(18),
      height: theme.spacing(18)
    }
  })
)

const HelloWorld: React.FC<Props> = ({ companyName }) => {
  const classes = useStyles()
  return companyName ? (
    <div className="section">
      <div className={classes.root}>
        <Avatar
          alt="Cláudio Henriques"
          src="/images/0.jpeg"
          className={classes.large}
        />
      </div>
      <Typing speed={15}>
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
