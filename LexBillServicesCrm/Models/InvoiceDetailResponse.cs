using System;
using System.Collections.Generic;

namespace LexBillServices.Models
{

    public class InvoiceDetailResponse{
        public int FacturaId { get; set; }
        public DateTime FechaFactura { get; set;}
        public decimal Total { get; set; }
        public Pedido Pedido { get; set; }
        public Cliente Cliente { get; set; }
        public List<DetallePedido> DetallePedidos { get; set; }
    }


}