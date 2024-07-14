export interface Cliente {
    clienteId: number;
    nombre: string;
    correo: string;
    telefono: string;
  }
  
  export interface Producto {
    productoId: number;
    nombreProducto: string;
    cantidad: number;
    precioUnitario: number;
  }
  
  export interface Factura {
    facturaId: number;
    pedidoId: number;
    fechaFactura: string;
    total: number;
  }
  
  export interface InvoiceDetailResponse {
    factura: Factura;
    cliente: Cliente;
    productos: Producto[];
    pedido: Pedido;
  }
  export interface Pedidos {
    cantidad: number,
    pedidoId: number,
    precioUnitario: number,
    productoId: number,
    producto: Producto
  }

  export interface $values{
    $values: Array<Pedidos>
  }

  export interface Pedido {
    cliente: Cliente
    detallePedidos: $values
  }
  