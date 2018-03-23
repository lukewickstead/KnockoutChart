using System;
using System.Collections.Generic;
using KnockoutChart.Models;

namespace KnockoutChart.Services
{
    public class InvestmentSurveyService : IInvestmentSurveyService
    {
        private const string DateFormat = "yyyy-MM-dd";

        public IEnumerable<InvestmentSurveyResultViewModel> Calculate(
            RiskLevel riskLevel,
            int lumpSumInvestmentAmount,
            int monthlyInvestmentAmount,
            int targetAmount)
        {

            // TODO: This needs refactoring.
            var month = 1;
            var growthRate = new GrowthRateProvider(riskLevel);
            var dateIncrement = DateTime.Today;
            decimal currentAmount = lumpSumInvestmentAmount;
            decimal currentAmountMin = lumpSumInvestmentAmount;
            decimal currentAmountMax = lumpSumInvestmentAmount;

            var results = new List<InvestmentSurveyResultViewModel>();
            
            do
            {
                results.Add(CreateResult(InvestmentSurveyResultType.Min, dateIncrement, month, currentAmountMin));
                results.Add(CreateResult(InvestmentSurveyResultType.Max, dateIncrement, month, currentAmountMax));
                results.Add(CreateResult(InvestmentSurveyResultType.Invested, dateIncrement, month, currentAmount));
                
                month++;
                currentAmount += monthlyInvestmentAmount;
                dateIncrement = dateIncrement.AddMonths(1);
                currentAmountMin = currentAmount * growthRate.MinPercent;
                currentAmountMax = currentAmount * growthRate.MaxPercent;
               
            } while (currentAmount < targetAmount);

            return results;
        }

        private static InvestmentSurveyResultViewModel CreateResult(
            InvestmentSurveyResultType type, 
            DateTime dateIncrement, 
            int month, 
            decimal currentAmount)
        { 
            return new InvestmentSurveyResultViewModel
            {
                Type = type,
                Month = month,
                InvestmentDate = dateIncrement.ToString(DateFormat),
                Value =  Convert.ToInt32(currentAmount)
            };
        }
    }
}