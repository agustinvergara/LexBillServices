namespace LexBillServices.Models
{
    public class Producto
    {
        public int ProductoId { get; set; }
        public string NombreProducto { get; set; }
        public string CodigoProducto { get; set; }
        public string SKU { get; set; }
        public decimal Precio { get; set; }
    }
}