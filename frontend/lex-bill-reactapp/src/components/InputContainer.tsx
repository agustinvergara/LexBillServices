import { Container } from "@mui/material"
import { ReactNode } from "react"

interface InputContainerProps{
    children: ReactNode
}

export const InputContainer: React.FC<InputContainerProps> = ({children}) =>  {

    return (
        <Container sx={{
            display:"flex",
            gap:"1rem",
            marginBottom: "1rem"
        }}>
            {children}
        </Container>
    )
}