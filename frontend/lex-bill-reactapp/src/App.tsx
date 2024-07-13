import { useState } from 'react'
import { Container } from '@mui/material';
import InvoiceTable from './components/InvoiceTable';
import InvoiceDetails from './components/InvoiceDetails';
import './App.css'

const App: React.FC = () => {
  const [selectedInvoiceId, setSelectedInvoiceId] = useState<string>('');

  return (
    <Container>
      <InvoiceTable onInvoiceSelect={setSelectedInvoiceId} />
      {selectedInvoiceId && <InvoiceDetails invoiceId={selectedInvoiceId} />}
    </Container>
  );
};


export default App;
