namespace LexBillServices.Models
{
    public class TipoCambio
    {
        public int TipoCambioId { get; set; }
        public string Moneda { get; set; }
        public decimal Tasa { get; set; }
        public DateTime Fecha { get; set; }
    }
}
