using System;
using System.Collections.Generic;
using KnockoutChart.Models;
using Microsoft.AspNetCore.Mvc;

namespace KnockoutChart.Controllers
{
    public class InvestmentSurveyController : Controller
    {
        
        [HttpPost]
        public IActionResult Submit([FromBody] InvestmentSurveyViewModel viewModel)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            
            return Json(GetStubbed());
        }

        private IEnumerable<InvestmentSurveyResultViewModel> GetStubbed()
        {
            return new List<InvestmentSurveyResultViewModel>
            {
                // Invested
                new InvestmentSurveyResultViewModel
                {
                    InvestmentDate = DateTime.Today.AddYears(-10).ToString("yy-MM-dd"),
                    Month = 1,
                    Type = "Invested",
                    Value = 1200
                },
                new InvestmentSurveyResultViewModel
                {
                    InvestmentDate = DateTime.Today.AddYears(-9).ToString("yy-MM-dd"),
                    Month = 1,
                    Type = "Invested",
                    Value = 1400
                },
                new InvestmentSurveyResultViewModel
                {
                    InvestmentDate = DateTime.Today.AddYears(-8).ToString("yy-MM-dd"),
                    Month = 1,
                    Type = "Invested",
                    Value = 1600
                },
                new InvestmentSurveyResultViewModel
                {
                    InvestmentDate = DateTime.Today.AddYears(-7).ToString("yy-MM-dd"),
                    Month = 1,
                    Type = "Invested",
                    Value = 1800
                },
                new InvestmentSurveyResultViewModel
                {
                    InvestmentDate = DateTime.Today.AddYears(-6).ToString("yy-MM-dd"),
                    Month = 1,
                    Type = "Invested",
                    Value = 2000
                },
                new InvestmentSurveyResultViewModel
                {
                    InvestmentDate = DateTime.Today.AddYears(-5).ToString("yy-MM-dd"),
                    Month = 1,
                    Type = "Invested",
                    Value = 2200
                },
                new InvestmentSurveyResultViewModel
                {
                    InvestmentDate = DateTime.Today.AddYears(-4).ToString("yy-MM-dd"),
                    Month = 1,
                    Type = "Invested",
                    Value = 2400
                },
                new InvestmentSurveyResultViewModel
                {
                    InvestmentDate = DateTime.Today.AddYears(-3).ToString("yy-MM-dd"),
                    Month = 1,
                    Type = "Invested",
                    Value = 2600
                },
                new InvestmentSurveyResultViewModel
                {
                    InvestmentDate = DateTime.Today.AddYears(-2).ToString("yy-MM-dd"),
                    Month = 1,
                    Type = "Invested",
                    Value = 2800
                },
                new InvestmentSurveyResultViewModel
                {
                    InvestmentDate = DateTime.Today.AddYears(-1).ToString("yy-MM-dd"),
                    Month = 1,
                    Type = "Invested",
                    Value = 3000
                },

                // Min
                new InvestmentSurveyResultViewModel
                {
                    InvestmentDate = DateTime.Today.AddYears(-10).ToString("yy-MM-dd"),
                    Month = 1,
                    Type = "Min",
                    Value = 2200
                },
                new InvestmentSurveyResultViewModel
                {
                    InvestmentDate = DateTime.Today.AddYears(-9).ToString("yy-MM-dd"),
                    Month = 1,
                    Type = "Min",
                    Value = 2400
                },
                new InvestmentSurveyResultViewModel
                {
                    InvestmentDate = DateTime.Today.AddYears(-8).ToString("yy-MM-dd"),
                    Month = 1,
                    Type = "Min",
                    Value = 2600
                },
                new InvestmentSurveyResultViewModel
                {
                    InvestmentDate = DateTime.Today.AddYears(-7).ToString("yy-MM-dd"),
                    Month = 1,
                    Type = "Min",
                    Value = 2800
                },
                new InvestmentSurveyResultViewModel
                {
                    InvestmentDate = DateTime.Today.AddYears(-6).ToString("yy-MM-dd"),
                    Month = 1,
                    Type = "Min",
                    Value = 3000
                },
                new InvestmentSurveyResultViewModel
                {
                    InvestmentDate = DateTime.Today.AddYears(-5).ToString("yy-MM-dd"),
                    Month = 1,
                    Type = "Min",
                    Value = 3200
                },
                new InvestmentSurveyResultViewModel
                {
                    InvestmentDate = DateTime.Today.AddYears(-4).ToString("yy-MM-dd"),
                    Month = 1,
                    Type = "Min",
                    Value = 3400
                },
                new InvestmentSurveyResultViewModel
                {
                    InvestmentDate = DateTime.Today.AddYears(-3).ToString("yy-MM-dd"),
                    Month = 1,
                    Type = "Min",
                    Value = 3600
                },
                new InvestmentSurveyResultViewModel
                {
                    InvestmentDate = DateTime.Today.AddYears(-2).ToString("yy-MM-dd"),
                    Month = 1,
                    Type = "Min",
                    Value = 3800
                },
                new InvestmentSurveyResultViewModel
                {
                    InvestmentDate = DateTime.Today.AddYears(-1).ToString("yy-MM-dd"),
                    Month = 1,
                    Type = "Min",
                    Value = 4000
                },


                // Max
                new InvestmentSurveyResultViewModel
                {
                    InvestmentDate = DateTime.Today.AddYears(-10).ToString("yy-MM-dd"),
                    Month = 1,
                    Type = "Max",
                    Value = 3200
                },
                new InvestmentSurveyResultViewModel
                {
                    InvestmentDate = DateTime.Today.AddYears(-9).ToString("yy-MM-dd"),
                    Month = 1,
                    Type = "Max",
                    Value = 3400
                },
                new InvestmentSurveyResultViewModel
                {
                    InvestmentDate = DateTime.Today.AddYears(-8).ToString("yy-MM-dd"),
                    Month = 1,
                    Type = "Max",
                    Value = 3600
                },
                new InvestmentSurveyResultViewModel
                {
                    InvestmentDate = DateTime.Today.AddYears(-7).ToString("yy-MM-dd"),
                    Month = 1,
                    Type = "Max",
                    Value = 3800
                },
                new InvestmentSurveyResultViewModel
                {
                    InvestmentDate = DateTime.Today.AddYears(-6).ToString("yy-MM-dd"),
                    Month = 1,
                    Type = "Max",
                    Value = 4000
                },
                new InvestmentSurveyResultViewModel
                {
                    InvestmentDate = DateTime.Today.AddYears(-5).ToString("yy-MM-dd"),
                    Month = 1,
                    Type = "Max",
                    Value = 4200
                },
                new InvestmentSurveyResultViewModel
                {
                    InvestmentDate = DateTime.Today.AddYears(-4).ToString("yy-MM-dd"),
                    Month = 1,
                    Type = "Max",
                    Value = 4400
                },
                new InvestmentSurveyResultViewModel
                {
                    InvestmentDate = DateTime.Today.AddYears(-3).ToString("yy-MM-dd"),
                    Month = 1,
                    Type = "Max",
                    Value = 4600
                },
                new InvestmentSurveyResultViewModel
                {
                    InvestmentDate = DateTime.Today.AddYears(-2).ToString("yy-MM-dd"),
                    Month = 1,
                    Type = "Max",
                    Value = 4800
                },
                new InvestmentSurveyResultViewModel
                {
                    InvestmentDate = DateTime.Today.AddYears(-1).ToString("yy-MM-dd"),
                    Month = 1,
                    Type = "Max",
                    Value = 5000
                }
            };
        }
    }
}