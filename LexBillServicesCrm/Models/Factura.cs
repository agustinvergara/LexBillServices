namespace LexBillServices.Models
{
    public class Factura
    {
        public int FacturaId { get; set; }
        public int PedidoId { get; set; }
        public DateTime FechaFactura { get; set; }
        public decimal Total { get; set; }

        public Pedido Pedido { get; set; }
    }
}