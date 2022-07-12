using Microsoft.AspNetCore.Mvc;
using SchoolWeb.Models;
using System.Diagnostics;

namespace SchoolWeb.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            this._logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult About()
        {
            return View();
        }

        public IActionResult Courses()
        {
            return View();
        }

        public IActionResult Staff()
        {
            return View();
        }

        public IActionResult Blog()
        {
            return View();
        }

        public IActionResult BlogInformation()
        {
            return View();
        }

        public IActionResult Contact()
        {
            return View();
        }
        
        [Route("/Home/Error/{code:int}")]
        public IActionResult Error(in int code)
        {
            return View(new ErrorViewModel
            {
                RequestId = "Page Not Found",
                ErrorMessage = $"Error Code {code}"
            }); 
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}