"use strict";

define(['d3', 'dimple'],
    function (d3, dimple) {
        return function investmentChart() {


            var data = [
                // Min
                {'date': '01-01-2011', 'month': '1', 'type': 'invested', 'value': '1200'},
                {'date': '01-01-2012', 'month': '2', 'type': 'invested', 'value': '1400'},
                {'date': '01-01-2013', 'month': '3', 'type': 'invested', 'value': '1600'},
                {'date': '01-01-2014', 'month': '4', 'type': 'invested', 'value': '1800'},
                {'date': '01-01-2015', 'month': '5', 'type': 'invested', 'value': '2000'},
                {'date': '01-01-2016', 'month': '6', 'type': 'invested', 'value': '2200'},
                {'date': '01-01-2017', 'month': '7', 'type': 'invested', 'value': '2400'},
                {'date': '01-01-2018', 'month': '8', 'type': 'invested', 'value': '2600'},
                {'date': '01-01-2019', 'month': '9', 'type': 'invested', 'value': '2800'},
                {'date': '01-01-2020', 'month': '10', 'type': 'invested', 'value': '3000'},

                // Min
                {'date': '01-01-2011', 'month': '1', 'type': 'min', 'value': '1500'},
                {'date': '01-01-2012', 'month': '2', 'type': 'min', 'value': '2000'},
                {'date': '01-01-2013', 'month': '3', 'type': 'min', 'value': '2500'},
                {'date': '01-01-2014', 'month': '4', 'type': 'min', 'value': '3000'},
                {'date': '01-01-2015', 'month': '5', 'type': 'min', 'value': '3500'},
                {'date': '01-01-2016', 'month': '6', 'type': 'min', 'value': '4000'},
                {'date': '01-01-2017', 'month': '7', 'type': 'min', 'value': '4500'},
                {'date': '01-01-2018', 'month': '8', 'type': 'min', 'value': '5000'},
                {'date': '01-01-2019', 'month': '9', 'type': 'min', 'value': '5500'},
                {'date': '01-01-2020', 'month': '10', 'type': 'min', 'value': '6000'},

                // Max
                {'date': '01-01-2011', 'year': '1', 'type': 'max', 'value': '2000'},
                {'date': '01-01-2012', 'year': '2', 'type': 'max', 'value': '3000'},
                {'date': '01-01-2013', 'year': '3', 'type': 'max', 'value': '4000'},
                {'date': '01-01-2014', 'year': '4', 'type': 'max', 'value': '5000'},
                {'date': '01-01-2015', 'year': '5', 'type': 'max', 'value': '6000'},
                {'date': '01-01-2016', 'year': '6', 'type': 'max', 'value': '7000'},
                {'date': '01-01-2017', 'year': '7', 'type': 'max', 'value': '8000'},
                {'date': '01-01-2018', 'year': '8', 'type': 'max', 'value': '9000'},
                {'date': '01-01-2019', 'year': '9', 'type': 'max', 'value': '10000'},
                {'date': '01-01-2020', 'year': '10', 'type': 'max', 'value': '11000'}
            ];

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
            var x = myChart.addTimeAxis("x", "date", "%d-%m-%Y", "%Y");
            x.title = "Date";
            x.fontFamily = "serif";

// Y AXIS
            var y = myChart.addCategoryAxis("y", 'value');
            y.title = "£ Value";
            y.fontFamily = "serif";

// MAX
            var maxChart = myChart.addSeries(["type"], dimple.plot.area);
            maxChart.data = dimple.filterData(data, "type", ["max"]);
            maxChart.lineWeight = 1;
            maxChart.lineMarkers = true;
            maxChart.tooltipFontSize = "12px";
            maxChart.tooltipFontFamily = "serif";
            maxChart.getTooltipText = function (e) {
                return ["Your projected maximum portfolio value would be £" + e.y + " by the year " + e.xField[0].getFullYear()];
            };

// MIN CHART
            var minChart = myChart.addSeries(["type"], dimple.plot.area);
            minChart.data = dimple.filterData(data, "type", ["min"]);
            minChart.lineWeight = 1;
            minChart.lineMarkers = true;
            minChart.tooltipFontSize = "12px";
            minChart.tooltipFontFamily = "serif";
            minChart.getTooltipText = function (e) {
                return ["Your projected minimum portfolio value would be £" + e.y + " by the year " + e.xField[0].getFullYear()];
            };

// INVESTED CHART
            var investedChart = myChart.addSeries(["type"], dimple.plot.line);
            investedChart.data = dimple.filterData(data, "type", ["invested"]);
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