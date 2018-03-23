using Microsoft.AspNetCore.Mvc;

namespace KnockoutChart.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}