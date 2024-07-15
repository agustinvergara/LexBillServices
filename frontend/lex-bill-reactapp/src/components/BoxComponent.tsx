import { ReactNode } from "react"
import { Card, CardContent, Box, Container } from '@mui/material';


interface BoxComponentProps {
    children: ReactNode
}

export const BoxComponent: React.FC<BoxComponentProps> = ({ children }) => {
    return (
        <Container  style={{display:"flex", alignContent:"center", padding: 0}}>
            <Box >
                <Card sx={{height:"100%"}} variant="outlined" >
                    <CardContent sx={{ display: "flex",  flexDirection: "row" , width: "70%", height:"100%", padding: 0}}>
                        {children}
                    </CardContent>
                </Card>
            </Box>
        </Container>
    )
}