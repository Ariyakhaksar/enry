import { CircularProgress } from '@mui/material'
import React from 'react'

type Props = {}

const loading = (props: Props) => {
  return (
    <div className='flex justify-center items-center h-[70vh]'>
      <CircularProgress />
    </div>
  )
}

export default loading