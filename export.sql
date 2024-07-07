IF EXISTS (SELECT 1 FROM sys.databases WHERE name = 'LexBillServicesDB')
BEGIN
    DROP DATABASE LexBillServicesDB;
END

CREATE DATABASE LexBillServicesDB;
GO

USE LexBillServicesDB;
GO

CREATE TABLE Clientes (
    ClienteId INT PRIMARY KEY IDENTITY,
    Nombre NVARCHAR(36) NOT NULL,
    Correo NVARCHAR(320) NOT NULL UNIQUE,
    Telefono NVARCHAR(20)
);

CREATE TABLE Productos(
    ProductoId INT PRIMARY KEY IDENTITY,
    NombreProducto NVARCHAR(350) NOT NULL,
    CodigoProducto NVARCHAR,
    SKU NVARCHAR(50),
    Precio DECIMAL(18, 2)
);

CREATE TABLE Pedidos (
    PedidoId INT PRIMARY KEY IDENTITY,
    ClienteId INT,
    FechaPedido DATE,
    ITBMS DECIMAL(18, 2),
    FOREIGN KEY (ClienteId) REFERENCES Clientes(ClienteId)
);

CREATE TABLE DetallePedidos (
    DetallePedidoId INT PRIMARY KEY IDENTITY,
    PedidoId INT,
    ProductoId INT,
    Cantidad INT,
    PrecioUnitario DECIMAL(18, 2),
    FOREIGN KEY (PedidoId) REFERENCES Pedidos(PedidoId),
    FOREIGN KEY (ProductoId) REFERENCES Productos(ProductoId)
);

CREATE TABLE Facturas (
    FacturaId INT PRIMARY KEY IDENTITY,
    PedidoId INT,
    FechaFactura DATE,
    Total DECIMAL(18, 2),
    FOREIGN KEY (PedidoId) REFERENCES Pedidos(PedidoId)
);

CREATE TABLE TipoCambio (
    TipoCambioId INT PRIMARY KEY IDENTITY,
    Moneda NVARCHAR(10),
    Tasa DECIMAL(18, 6),
    Fecha DATE
);

GO