
USE LexBillServicesDB;
GO


INSERT INTO Clientes (Nombre, Correo, Telefono) VALUES
('Paula', 'purena@gmail.com', '6222-2196'),
('Jonathan', 'jonny@gmail.com', '6773-8594'),
('Andres', 'andres@gmail.com', '6773-9594'),
('Jorge', 'jorge@gmail.com', '6663-9594');


INSERT INTO Productos (NombreProducto, CodigoProducto, SKU, Precio) VALUES
('Producto A', 'PA001', 'SKU001', 999.99),
('Producto B', 'PB001', 'SKU002', 49.99),
('Producto C', 'PC001', 'SKU003', 79.99);


INSERT INTO Pedidos (ClienteId, FechaPedido, ITBMS) VALUES
(1, '2024-07-10', 77.00),
(2, '2024-07-11', 5.60),
(3, '2024-07-12', 75.60);


INSERT INTO DetallePedidos (PedidoId, ProductoId, Cantidad, PrecioUnitario) VALUES
(1, 1, 1, 999.99),
(1, 2, 2, 49.99),
(2, 3, 1, 79.99),
(3, 1, 1, 999.99),
(3, 3, 1, 79.99);


INSERT INTO Facturas (PedidoId, FechaFactura, Total) VALUES
(1, '2024-07-10', 1099.97),
(2, '2024-07-11', 79.99),
(3, '2024-07-12', 1079.98);


INSERT INTO TipoCambio (Moneda, Tasa, Fecha) VALUES
('USD', 1.000000, '2024-07-07'),
('EUR', 0.900000, '2024-07-07'),
('JPY', 110.000000, '2024-07-07');

GO
