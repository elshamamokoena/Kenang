using Microsoft.AspNetCore.Mvc;

namespace Kenang.Controllers
{
    public class ProjectController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
