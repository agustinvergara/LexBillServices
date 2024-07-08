import { useState } from 'react'
import { PageTitle } from './Components/PageTitle'
import { Orders } from './Components/Orders'
import { CardContainer } from './Components/CardContainer'

//mui
import { Box, Typography, TextField, Button} from "@mui/material/"

import './App.css'
import { OrderDetail } from './Components/OrderDetail'
import { ClientContent } from './Components/ClientContent'

function App() {

  const [isDetail, setIsDetail] = useState<boolean>(false)


  return (
    <>
      <section className='title_section_container'>
        <PageTitle textContent="Invoice" />
        <Box
          display={"flex"}
          alignItems={"flex-start"}
        >
          <Typography variant="h6" fontWeight={300} fontSize={"1em"}>
            Invoice orders of products
          </Typography>
        </Box>
      </section>

      <section className='Page_container'>
        <div className="Search_container">
          <TextField
            placeholder='order id#'
            type='number'
            label= "order id"
            id="outlined_basic"
            variant="outlined" 
            InputLabelProps={{
              shrink: true,
            }}
            />
            <Button variant="contained">
              Search
            </Button>
        </div>
        <CardContainer>
          <Orders />
        </CardContainer>
        <section className='detail_section_container'>
            <OrderDetail/>
            <ClientContent/>
        </section>
      </section>
    </>
  )
}

export default App
