using Microsoft.AspNetCore.Mvc;

namespace Kenang.Controllers
{
    public class ContactController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
