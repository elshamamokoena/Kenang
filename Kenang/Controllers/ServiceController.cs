﻿using Microsoft.AspNetCore.Mvc;

namespace Kenang.Controllers
{
    public class ServiceController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

    }
}
