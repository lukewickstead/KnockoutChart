using KnockoutChart.Models;
using KnockoutChart.Services;
using Microsoft.AspNetCore.Mvc;

namespace KnockoutChart.Controllers
{
    public class InvestmentSurveyController : Controller
    {
        private readonly IInvestmentSurveyService _investmentSurveyService;

        public InvestmentSurveyController(IInvestmentSurveyService investmentSurveyService)
        {
            this._investmentSurveyService = investmentSurveyService;
        }

        [HttpPost]
        public IActionResult Submit([FromBody] InvestmentSurveyViewModel viewModel)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            return Json(_investmentSurveyService.Calculate(
                viewModel.RiskLevel,
                viewModel.LumpSumInvestmentAmount,
                viewModel.MonthlyInvestmentAmount,
                viewModel.TargetValue));
        }
    }
}