import { CardContainer } from "./CardContainer"

//Mui
import {Typography} from "@mui/material/"

export const OrderDetail = () => {

    return (
        <>
            <CardContainer>
                <Typography variant="h5" component="div">
                    Detail
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    adjective
                </Typography>
                <Typography variant="body2">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                </Typography>
            </CardContainer>
        </>
    )
}