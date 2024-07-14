import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Button, Typography } from '@mui/material';
import { Invoice } from '../types/Invoice';
import { InputContainer } from './InputContainer';
import { TableComponent } from './TableComponent';

const InvoiceTable: React.FC<{ onInvoiceSelect: (id: string) => void }> = ({ onInvoiceSelect }) => {
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [filteredInvoices, setFilteredInvoices] = useState<Invoice[]>([]);
  const [invoiceId, setInvoiceId] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchInvoices();
  }, []);

  const fetchInvoices = async () => {
    try {
      const response = await fetch('http://localhost:5208/api/Facturas');
      if (!response.ok) {
        throw new Error('Error al cargar las facturas');
      }
      const data = await response.json();
      setInvoices(data.$values); // Asumiendo que el arreglo de facturas está en data.$values
      setFilteredInvoices(data.$values);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleFilter = () => {
    const filtered = invoices.filter(invoice => invoice.facturaId.toString() === invoiceId);
    setFilteredInvoices(filtered);
    if (filtered.length > 0) {
      onInvoiceSelect(filtered[0].facturaId.toString());
    } else {
      onInvoiceSelect('');
    }
  };

  return (
    <div>
      <InputContainer >
        <TextField
          label="ID de Factura"
          variant="outlined"
          value={invoiceId}
          onChange={(e) => setInvoiceId(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={handleFilter}>
          Filtrar
        </Button>
      </InputContainer>

      {loading ? (
        <Typography variant="body1">Cargando...</Typography>
      ) : filteredInvoices.length === 0 ? (
        <Typography variant="body1">No se encontraron facturas.</Typography>
      ) : (
        <TableComponent
          titlesColumns={["Id", "Pedido Id", "Fecha Factura", "Total"]}
          tableContentRender={() => (
            <>
              {filteredInvoices.map((invoice) => (
                <TableRow key={invoice.facturaId} onClick={() => onInvoiceSelect(invoice.facturaId.toString())}>
                  <TableCell>{invoice.facturaId}</TableCell>
                  <TableCell>{invoice.pedidoId}</TableCell>
                  <TableCell>{new Date(invoice.fechaFactura).toLocaleDateString()}</TableCell>
                  <TableCell>{invoice.total}</TableCell>
                </TableRow>
              ))}
            </>
          )}
        />
      )}
    </div>
  );
};

export default InvoiceTable;
