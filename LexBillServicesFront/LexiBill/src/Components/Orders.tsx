import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {TitleComponents} from './TtitleComponents';

interface OrdersProps{
    orders: Array<OrdersT>
}

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

export const Orders:React.FC<OrdersProps> = ({orders})=> {
  return (
    <React.Fragment>
      <TitleComponents>Invoice Orders</TitleComponents>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>OrderId</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Payment Method</TableCell>
            <TableCell align="right">Sale Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.pedidoId}>
              <TableCell>{order.FechaPedido.toString()}</TableCell>
              <TableCell>{order.ITBMS}</TableCell>
              <TableCell>{order.shipTo}</TableCell>
              <TableCell>{order.paymentMethod}</TableCell>
              <TableCell align="right">{`$${order.amount}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link>
    </React.Fragment>
  );
}