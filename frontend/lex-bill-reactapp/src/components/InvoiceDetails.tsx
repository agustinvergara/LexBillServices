import React, { useEffect, useState } from 'react';
import { Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Container } from '@mui/material';
import { InvoiceDetailResponse } from '../types/InvoiceDetailResponse';
import { BoxComponent } from './BoxComponent';
import { TableComponent } from './TableComponent';
import { ImgComponent } from './ImgComponent';

interface InvoiceDetailsProps {
    invoiceId: string;
}

const InvoiceDetails: React.FC<InvoiceDetailsProps> = ({ invoiceId }) => {
    const [invoiceDetails, setInvoiceDetails] = useState<InvoiceDetailResponse | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const tableHeaders: Array<string> = ["Producto", "cantidad", "Precio Unit$"]

    useEffect(() => {
        fetchInvoiceDetails(invoiceId);
    }, [invoiceId]);

    const fetchInvoiceDetails = async (id: string) => {
        setLoading(true);
        try {
            const response = await fetch(`http://localhost:5208/api/Facturas/Detalles/${id}`);
            if (!response.ok) {
                throw new Error('Error al cargar los detalles de la factura');
            }

            const data = await response.json();
            setInvoiceDetails(data);
            console.log('invoiceDetails:', data); // Aquí imprimes invoiceDetails en la consola


        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <Typography variant="body1">Cargando...</Typography>;
    }

    if (!invoiceDetails) {
        return <Typography variant="body1">No se encontraron detalles de la factura.</Typography>;
    }
    console.log(invoiceDetails.pedido.detallePedidos.$values)

    //   const { factura, cliente, productos } = invoiceDetails;

    return (
        <div>
            <div style={{ marginTop: "1rem" }}>
                <Typography variant="h6" >Detalles de los Productos</Typography>
            </div>
            <Container sx={{
                display: "flex",
                gap: "1rem",
                marginTop: "1rem",
                padding: 0,
            }}>

                <BoxComponent>
                    <Container sx={{
                        display: "flex", justifyContent: "center",
                        alignContent: "center",
                        alignItems: "center",
                    }}>
                        <ImgComponent />
                    </Container>
                    <Container
                        sx={{
                            display: "flex", justifyContent: "center",
                            flexDirection: "column",
                            alignContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Typography variant="h5" component="div">
                            {invoiceDetails.pedido.cliente.nombre}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            Tel: {invoiceDetails.pedido.cliente.telefono}
                        </Typography>
                        <Typography variant="body2">
                            Mail: {invoiceDetails.pedido.cliente.correo}
                        </Typography>
                    </Container>

                </BoxComponent>

                <TableComponent
                    isTitle
                    titleTable='Detalles de los Productos'
                    titlesColumns={tableHeaders}
                    tableContentRender={() => (
                        <>
                            {invoiceDetails.pedido.detallePedidos.$values?.map((pedido) => (
                                <TableRow key={pedido.pedidoId}>
                                    <TableCell>{pedido.producto.nombreProducto}</TableCell>
                                    <TableCell>{pedido.cantidad}</TableCell>
                                    <TableCell>{pedido.precioUnitario}</TableCell>
                                </TableRow>
                            ))}
                        </>
                    )}
                />
            </Container>
        </div>
    );
};

export default InvoiceDetails;
