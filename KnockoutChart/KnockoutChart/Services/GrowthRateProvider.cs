using KnockoutChart.Models;

namespace KnockoutChart.Services
{
    internal class GrowthRateProvider
    {
        internal decimal MinPercent { get; private set; }
        internal decimal MaxPercent { get; private set; }

        internal GrowthRateProvider(RiskLevel risk)
        {
            switch (risk)
            {
                case RiskLevel.Low:
                    MinPercent = GetMonthlyGrowth(1.5m);
                    MaxPercent = GetMonthlyGrowth(2.5m);
                    break;
                case RiskLevel.Medium:
                    MinPercent = GetMonthlyGrowth(1.5m);
                    MaxPercent = GetMonthlyGrowth(3.5m);
                    break;
                case RiskLevel.High:
                    MinPercent = GetMonthlyGrowth(2m);
                    MaxPercent = GetMonthlyGrowth(4m);
                    break;
            }
        }

        private static decimal GetMonthlyGrowth(decimal yearlyGrowth)
        {
            return 1.0m + (yearlyGrowth / 12.0m);
        }
    }
}