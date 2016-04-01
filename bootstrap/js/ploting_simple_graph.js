//top 
var BASE_URL = 'https://query.yahooapis.com/v1/public/yql?q=';
var yql_query = 'select * from yahoo.finance.quote where symbol in ("YHOO","AAPL","GOOG","MSFT")';
var yql_query_str = encodeURI(BASE_URL + yql_query);
var query_str_final = yql_query_str + "&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";

$.getJSON(query_str_final, function(Stock_data) {
	console.log(Stock_data);

	var Name = Stock_data.query.results.quote[0].Name;
	document.getElementById("Name").innerHTML = "Name: " + Name;

	var changeValue = Stock_data.query.results.quote[0].Change;
	document.getElementById("Change").innerHTML = "Change: " + changeValue;

	var DaysHigh = Stock_data.query.results.quote[0].DaysHigh;
	document.getElementById("DaysHigh").innerHTML = "DaysHigh: " + DaysHigh;

	var DaysLow = Stock_data.query.results.quote[0].DaysLow;
	document.getElementById("DaysLow").innerHTML = "DaysLow: " + DaysLow;

	var LastTradePriceOnly = Stock_data.query.results.quote[0].LastTradePriceOnly;
	document.getElementById("LastTradePriceOnly").innerHTML = "LastTradePriceOnly: " + LastTradePriceOnly;

	var MarketCapitalization = Stock_data.query.results.quote[0].MarketCapitalization;
	document.getElementById("MarketCapitalization").innerHTML = "MarketCapitalization: " + MarketCapitalization;

});

	// <!-----------------------stock chart----------------------->

google.charts.load('current', {'packages': ['corechart']});

google.charts.setOnLoadCallback(drawChart);

	var Array_data = getData("year");

	var options = {
		title: 'Stock',
		curveType: 'function',
		legend: {
			position: 'bottom'
		}
	};

function drawChart() {

	var chartData = google.visualization.arrayToDataTable(Array_data);

	var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
	chart.draw(Array_data, options);

}

function getData(dataRange) {
	var dataArray;

	if (dataRange == "year") {
		dataArray = [
			['Year', 'Stock Price'],
			['Jav', 190],
			['Feb', 30],
			['Mar', 90],
			['Apr', 148],
			['May', 76],
			['Jun', 45],
			['Jul', 44],
			['Aug', 130],
			['Sep', 165],
			['Oct', 54],
			['Nov', 45],
			['Dec', 100],
		];

	} else if (dataRange == "halfyear") {
		dataArray = [
			['Year', 'Stock Price'],
			['Jav 1', 100],
			['Jav 15', 105],
			['Feb 1', 117],
			['Feb 15', 73],
			['Mar 1', 105],
			['Mar 15', 125],
			['Apr 1', 140],
			['Apr 15', 70],
			['May 1', 120],
			['May 15', 85],
			['Jun 1', 100],
			['Jun 15', 110],
		];
	};

	return dataArray;
};

function buttonPressed(buttonTitle) {

	Array_data = getData(buttonTitle);

	var chartData = google.visualization.arrayToDataTable(Array_data);

	var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
	chart.draw(chartData, options);

};

//end
