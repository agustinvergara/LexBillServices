using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using LexBillServices.Data;
using LexBillServices.Models;

namespace LexBillServicesCrm.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TiposCambioController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public TiposCambioController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/TiposCambio
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TipoCambio>>> GetTipoCambios()
        {
            return await _context.TipoCambio.ToListAsync(); // Asegúrate de que el nombre aquí es correcto
        }

        // GET: api/TiposCambio/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TipoCambio>> GetTipoCambio(int id)
        {
            var tipoCambio = await _context.TipoCambio.FindAsync(id); // Asegúrate de que el nombre aquí es correcto

            if (tipoCambio == null)
            {
                return NotFound();
            }

            return tipoCambio;
        }

        // PUT: api/TiposCambio/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTipoCambio(int id, TipoCambio tipoCambio)
        {
            if (id != tipoCambio.TipoCambioId)
            {
                return BadRequest();
            }

            _context.Entry(tipoCambio).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TipoCambioExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/TiposCambio
        [HttpPost]
        public async Task<ActionResult<TipoCambio>> PostTipoCambio(TipoCambio tipoCambio)
        {
            _context.TipoCambio.Add(tipoCambio); // Asegúrate de que el nombre aquí es correcto
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTipoCambio", new { id = tipoCambio.TipoCambioId }, tipoCambio);
        }

        // DELETE: api/TiposCambio/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTipoCambio(int id)
        {
            var tipoCambio = await _context.TipoCambio.FindAsync(id); // Asegúrate de que el nombre aquí es correcto
            if (tipoCambio == null)
            {
                return NotFound();
            }

            _context.TipoCambio.Remove(tipoCambio); // Asegúrate de que el nombre aquí es correcto
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TipoCambioExists(int id)
        {
            return _context.TipoCambio.Any(e => e.TipoCambioId == id); // Asegúrate de que el nombre aquí es correcto
        }
    }
}



