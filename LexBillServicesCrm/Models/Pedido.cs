namespace LexBillServices.Models
{
    public class Pedido
    {
        public int PedidoId { get; set; }
        public int ClienteId { get; set; }
        public DateTime FechaPedido { get; set; }
        public decimal ITBMS { get; set; }

        public Cliente Cliente { get; set; }
        public ICollection<DetallePedido> DetallePedidos { get; set; }
    }
}