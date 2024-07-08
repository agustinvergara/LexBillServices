import { ReactNode } from "react"

import { Card, CardContent, Box } from '@mui/material';


interface CardContainerProps {
    children: ReactNode
}

export const CardContainer: React.FC<CardContainerProps> = ({ children }) => {

    return (
        <>
            <Box>
                <Card variant="outlined">
                    <CardContent>
                        {children}
                    </CardContent>
                </Card>
            </Box>
        </>
    )
}