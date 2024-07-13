// src/types/Invoice.ts

export interface Invoice {
    facturaId: number;
    pedidoId: number;
    fechaFactura: string;
    total: number;
  }
  
  export interface InvoiceDetailResponse {
    facturaId: number;
    fechaFactura: string;
    total: number;
    pedido: {
      pedidoId: number;
      fechaPedido: string;
      itbms: number;
      clienteId: number;
    };
    cliente: {
      clienteId: number;
      nombre: string;
      correo: string;
      telefono: string;
    };
    detallePedidos: {
      detallePedidoId: number;
      pedidoId: number;
      productoId: number;
      cantidad: number;
      precioUnitario: number;
      producto: {
        productoId: number;
        nombreProducto: string;
        codigoProducto: string;
        sku: string;
        precio: number;
      };
    }[];
  }
  