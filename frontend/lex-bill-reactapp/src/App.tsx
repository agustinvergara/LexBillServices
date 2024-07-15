
import React, { useState } from 'react';
import { Container, Typography } from '@mui/material';
import InvoiceTable from './components/InvoiceTable';
import InvoiceDetails from './components/InvoiceDetails';
import './App.css';

const App: React.FC = () => {
  const [selectedInvoiceId, setSelectedInvoiceId] = useState<string>("");

  console.log(selectedInvoiceId)
  return (
    <Container >
      <Typography variant="h2" style={{ marginTop: '1.2rem', textAlign:"justify", padding: "1rem"}}>Gestor de Facturas</Typography>
      <InvoiceTable onInvoiceSelect={setSelectedInvoiceId} />
      {selectedInvoiceId && <InvoiceDetails invoiceId={selectedInvoiceId} />}
    </Container>
  );
};

export default App;
