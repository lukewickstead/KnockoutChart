namespace KnockoutChart.Models
{
    public class InvestmentSurveyViewModel
    {
        public int LumpSumInvestmentAmount { get; set; }
        public int MonthlyInvestmentAmount { get; set; }
        public int TargetValue { get; set; }
        public int TimeScale{ get; set; }
        public string RiskLevel { get; set; }
    }
}