import React, { useEffect, useState } from 'react';
import { Paper, Typography } from '@mui/material';
// import { Invoice, Client, Order } from '/types';
import { Invoice } from '../types/Invoice';
import { Client } from '../types/Client';
import { Order } from '../types/Order'

interface Props {
  invoiceId: string;
}

const InvoiceDetails: React.FC<Props> = ({ invoiceId }) => {
  const [invoice, setInvoice] = useState<Invoice | null>(null);
  const [client, setClient] = useState<Client | null>(null);
  const [order, setOrder] = useState<Order | null>(null);

  useEffect(() => {
    if (invoiceId) {
      // Llamada a la API para obtener la factura
      fetch(`API_URL/invoices/${invoiceId}`)
        .then(response => response.json())
        .then(data => setInvoice(data));

      // Llamada a la API para obtener el cliente
      fetch(`API_URL/clients/${invoiceId}`)
        .then(response => response.json())
        .then(data => setClient(data));

      // Llamada a la API para obtener el pedido
      fetch(`API_URL/orders/${invoiceId}`)
        .then(response => response.json())
        .then(data => setOrder(data));
    }
  }, [invoiceId]);

  if (!invoice || !client || !order) {
    return <Typography>Cargando...</Typography>;
  }

  return (
    <Paper>
      <Typography variant="h5">Detalles de Factura</Typography>
      <Typography>ID: {invoice.facturaId}</Typography>
      <Typography>Cliente: {client}</Typography>
      <Typography>Fecha: {invoice.date}</Typography>
      <Typography>Total: {invoice.total}</Typography>

      <Typography variant="h6">Pedido</Typography>
      {order.details.map((detail) => (
        <Typography key={detail.id}>
          Producto: {detail.productName} - Cantidad: {detail.quantity} - Precio: {detail.price}
        </Typography>
      ))}
    </Paper>
  );
};

export default InvoiceDetails;
