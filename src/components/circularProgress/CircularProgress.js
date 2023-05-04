import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import './index.css'

const LoadingIndicator = () => {
  return (
    <div className='progress'>
      <CircularProgress color='inherit' />
    </div>
  );
};

export default LoadingIndicator;