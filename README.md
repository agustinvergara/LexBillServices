# LexBillServices

LexBillServices es un proyecto ASP.NET Core que gestiona productos y tipos de cambio. Este documento describe cómo configurar y ejecutar el proyecto.

## Requisitos

-   .NET 8.0 SDK
-   SQL Server
-   Visual Studio 2022 (opcional, pero recomendado)
-  Entity Framework Core tools

## Configuración del proyecto

### 1. Clonar el repositorio

Clona el repositorio en tu máquina local:

    git clone https://github.com/agustinvergara/LexBillServices.git
    cd LexBillServices
### 2. Instalar la herramienta de CLI de Entity Framework Core

Asegúrate de tener instalada la herramienta de CLI de Entity Framework Core:

    dotnet tool install --global dotnet-ef

### 3. Configurar la base de datos

Asegúrate de tener una instancia de SQL Server en ejecución. Ejecuta los  scripts SQL incluidos en el archivo **export.sql** para crear la base de datos y el usuario que esta configurado dentro del proyecto:

    sqlcmd -S localhost -U SA -P 'YourStrong@Passw0rd' -i ./export.sql

- Reemplace 'YourStrong@Passw0rd' con la contraseña de su superusuario de sqlserver

### 4. Revisar la cadena de conexión 

En el archivo `LexBillServicesCrm/appsettings.json`, asegurate que la cadena de conexión esta bien configurada para que apunte a tu instancia de SQL Server:

    "ConnectionStrings": {
    "DefaultConnection": "Server=localhost;Database=LexBillServicesDB;User Id=LexBillDbManager;Password=PoloCod07.;TrustServerCertificate=True;"}

### 5. Crear las migraciones y actualizar la base de datos

En la consola del Administrador de Paquetes de NuGet o en la terminal, ejecuta los siguientes comandos:

    dotnet ef migrations add InitialCreate
    dotnet ef database update

### 6. Ejecutar el proyecto

Ejecuta el proyecto con el siguiente comando:

    dotnet run
El proyecto estará disponible en 'http://localhost:5208'


## Endpoints

### Productos

-   `GET /api/Productos`: Obtiene todos los productos.
-   `GET /api/Productos/{id}`: Obtiene un producto por su ID.
-   `POST /api/Productos`: Crea un nuevo producto.
-   `PUT /api/Productos/{id}`: Actualiza un producto existente.
-   `DELETE /api/Productos/{id}`: Elimina un producto por su ID.

### Tipos de Cambio

-   `GET /api/TiposCambio`: Obtiene todos los tipos de cambio.
-   `GET /api/TiposCambio/{id}`: Obtiene un tipo de cambio por su ID.
-   `POST /api/TiposCambio`: Crea un nuevo tipo de cambio.
-   `PUT /api/TiposCambio/{id}`: Actualiza un tipo de cambio existente.
-   `DELETE /api/TiposCambio/{id}`: Elimina un tipo de cambio por su ID.

### Se repite el mismo proceso para los demas modelos:

Solo reemplace el endpoint con el prefijo a utilizar.

- Clientes
- Pedidos
- DetallesPedidos
- Facturas
- TiposCambio

## 🚧Proyecto en construccion🚧

Estoy trabajando para implementar el frontend de manera en que este proyecto sea un pequeño CRM.


