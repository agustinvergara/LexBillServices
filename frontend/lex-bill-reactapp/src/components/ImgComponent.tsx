import { Container } from "@mui/material"
import { Avatar } from '@mui/material';

export const ImgComponent = () => {
    return(
        <>
            <Container>
                <Avatar className="MuiAvatar-circular" sx={{ height: '70px', width: '70px' }}/>
            </Container>
        </>
    )
}