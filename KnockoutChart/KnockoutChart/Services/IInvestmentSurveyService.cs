using System.Collections.Generic;
using KnockoutChart.Models;

namespace KnockoutChart.Services
{
    public interface IInvestmentSurveyService
    {
        IEnumerable<InvestmentSurveyResultViewModel> Calculate(
            RiskLevel riskLevel,
            int lumpSumInvestmentAmount,
            int monthlyInvestmentAmount,
            int targetAmount);
    }
}