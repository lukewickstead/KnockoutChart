"use strict";

define(['d3', 'dimple'],
    function (d3, dimple) {
        return function investmentChart(data) {

            // CHART
            var svg = dimple.newSvg("#chartContainer", 500, 400);
            var myChart = new dimple.chart(svg, data);
            myChart.setBounds(70, 30, 420, 330);

            myChart.defaultColors = [
                new dimple.color("#E0F1F1"),
                new dimple.color("#EAEAEC"),
                new dimple.color("#F7F0AE"),
                new dimple.color("#D1E8ED"),
                new dimple.color("#C3DEE9"),
                new dimple.color("#EFCFD8")
            ];

            // X AXIS           
            var x = myChart.addTimeAxis("x", "investmentDate", "%Y-%m-%d", "%Y");
            x.title = "Date";
            x.fontFamily = "serif";

            // Y AXIS
            var y = myChart.addCategoryAxis("y", 'value');
            y.title = "£ Value";
            y.fontFamily = "serif";

            // MAX
            var maxChart = myChart.addSeries(["type"], dimple.plot.area);
            maxChart.data = dimple.filterData(data, "type", ["Max"]);
            maxChart.lineWeight = 1;
            maxChart.lineMarkers = true;
            maxChart.tooltipFontSize = "12px";
            maxChart.tooltipFontFamily = "serif";
            maxChart.getTooltipText = function (e) {
                return ["Your projected maximum portfolio value would be £" + e.y + " by the year " + e.xField[0].getFullYear()];
            };

            // MIN CHART
            var minChart = myChart.addSeries(["type"], dimple.plot.area);
            minChart.data = dimple.filterData(data, "type", ["Min"]);
            minChart.lineWeight = 1;
            minChart.lineMarkers = true;
            minChart.tooltipFontSize = "12px";
            minChart.tooltipFontFamily = "serif";
            minChart.getTooltipText = function (e) {
                return ["Your projected minimum portfolio value would be £" + e.y + " by the year " + e.xField[0].getFullYear()];
            };

            // INVESTED CHART
            var investedChart = myChart.addSeries(["type"], dimple.plot.line);
            investedChart.data = dimple.filterData(data, "type", ["Invested"]);
            investedChart.lineWeight = 1;
            investedChart.lineMarkers = true;
            investedChart.tooltipFontSize = "12px";
            investedChart.tooltipFontFamily = "serif";
            investedChart.getTooltipText = function (e) {
                return ["You would have invested £" + e.y + " by the year " + e.xField[0].getFullYear()];
            };

            // LEGEND
            var myLegend = myChart.addLegend(10, 10, 300, 200, 'right');
            myLegend.fontFamily = "serif";

            // DRAW
            myChart.draw();
        };
    });