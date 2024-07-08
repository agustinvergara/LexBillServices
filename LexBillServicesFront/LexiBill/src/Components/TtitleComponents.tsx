
import * as React from 'react';
import Typography from '@mui/material/Typography';

interface TitleProps {
  children?: React.ReactNode;
}

export const TitleComponents: React.FC<TitleProps> = (props) => {
  return (
    <Typography component="h2" variant="h6" color="black" gutterBottom>
      {props.children}
    </Typography>
  );
}