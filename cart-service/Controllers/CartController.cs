using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace CartService.Controllers
{
    [ApiController]
    [Route("cart")]
    public class CartController : ControllerBase
    {
        private static readonly Dictionary<string, List<CartItem>> Carts = new();

        [HttpPost("{userId}")]
        public IActionResult AddItem(string userId, [FromBody] CartItem item)
        {
            if (!Carts.ContainsKey(userId))
            {
                Carts[userId] = new List<CartItem>();
            }
            Carts[userId].Add(item);
            return Ok(Carts[userId]);
        }

        [HttpGet("{userId}")]
        public IActionResult GetCart(string userId)
        {
            Carts.TryGetValue(userId, out var items);
            return Ok(new { userId, items = items ?? new List<CartItem>() });
        }
    }

    public record CartItem(string ProductId, int Quantity);
}
