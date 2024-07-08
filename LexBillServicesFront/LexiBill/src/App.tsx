import { useState } from 'react'
import { PageTitle } from './Components/PageTitle'
import { Orders } from './Components/Orders'
import { CardContainer } from './Components/CardContainer'

//mui
import { Box, Typography, TextField, Button} from "@mui/material/"

import { OrderDetail } from './Components/OrderDetail'
import { ClientContent } from './Components/ClientContent'

import './App.css'

// Generate Order Data
function createData(
  id: number,
  date: string,
  name: string,
  shipTo: string,
  paymentMethod: string,
  amount: number,
) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(
    0,
    '16 Mar, 2019',
    'Elvis Presley',
    'Tupelo, MS',
    'VISA ⠀•••• 3719',
    312.44,
  ),
  createData(
    1,
    '16 Mar, 2019',
    'Paul McCartney',
    'London, UK',
    'VISA ⠀•••• 2574',
    866.99,
  ),
  createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
  createData(
    3,
    '16 Mar, 2019',
    'Michael Jackson',
    'Gary, IN',
    'AMEX ⠀•••• 2000',
    654.39,
  ),
  createData(
    4,
    '15 Mar, 2019',
    'Bruce Springsteen',
    'Long Branch, NJ',
    'VISA ⠀•••• 5919',
    212.79,
  ),
];

function App() {

  const [isDetail, setIsDetail] = useState<boolean>(false)
  const [ordersData, setOrdersData] = useState<Array<OrdersT>>([])

  const pushOrderData = () => {
    
  }
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
          <Orders orders={ordersData}/>
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
