import React from 'react'

import Rating from '@material-ui/lab/Rating'
import Typography from '@material-ui/core/Typography'

const Languages: React.FC = () => {
  return (
    <div className="section">
      <h2>Languages</h2>
      <Typography component="legend">Read only</Typography>
      <Rating name="read-only" value={2} readOnly />

      <Typography component="legend">Read only</Typography>
      <Rating name="read-only" value={3} readOnly />

      <Typography component="legend">Read only</Typography>
      <Rating name="read-only" value={4} readOnly />
    </div>
  )
}

export default Languages
