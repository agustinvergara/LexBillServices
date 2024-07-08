import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React from 'react';

interface PageTitleProps {
    textContent: string
}


export const PageTitle: React.FC<PageTitleProps> = ({ textContent }) => {
    return (
        <>
            <Box 
                display={"flex"}
                alignItems={"flex-start"}
                >
                <Typography variant="h3" fontWeight={300} fontSize={"2.5rem"}>
                    {textContent}
                </Typography>
            </Box>
        </>
    )
}