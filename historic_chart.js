//top 


google.charts.load('current', {'packages': ['corechart']});

google.charts.setOnLoadCallback(drawChart);

	var data = getData("year");

	var options = {
		title: 'Historic data',
		curveType: 'function',
		colors: ['#15A0C8'],
		legend: {
			position: 'bottom'
		}
	};

function drawChart() {

	var chartData = google.visualization.arrayToDataTable(data);

	var chart = new google.visualization.LineChart(document.getElementById('historic_chart_div'));
	chart.draw(chartData, options);

}

function getData(dataRange) {
	
	var dataArray = [
		['Date','Stock Value USD'],
	];

	var BASE_URL = 'https://query.yahooapis.com/v1/public/yql?q=';
	var yql_query;
	
	if (dataRange == "year") {
		
		yql_query = 'select * from yahoo.finance.historicaldata where symbol = "YHOO" and startDate = "2015-03-30" and endDate = "2016-03-29"';

	} else if (dataRange == "halfyear") {
		yql_query = 'select * from yahoo.finance.historicaldata where symbol = "YHOO" and startDate = "2015-10-30" and endDate = "2016-03-29"';
	} else if (dataRange == "thisMonth") {
		yql_query = 'select * from yahoo.finance.historicaldata where symbol = "YHOO" and startDate = "2016-02-29" and endDate = "2016-03-29"';
	} else if (dataRange == "thisWeek") {
		yql_query = 'select * from yahoo.finance.historicaldata where symbol = "YHOO" and startDate = "2016-03-23" and endDate = "2016-03-29"';
	};

	var yql_query_str = encodeURI(BASE_URL + yql_query);
	var query_str_final = yql_query_str + "&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";


	$.getJSON(query_str_final, function(data) {

		var stockArray = data.query.results.quote;

		for (var i = 0; i < stockArray.length; i++) {
			var currentObject = stockArray[i];
			// console.log(currentObject.Close);
			var pushedArray = [currentObject.Date, parseFloat(currentObject.Close)];
			dataArray[i+1] = pushedArray;
		}
		// console.log(dataArray);
	var chartData = google.visualization.arrayToDataTable(dataArray);

	var chart = new google.visualization.LineChart(document.getElementById('historic_chart_div'));
	chart.draw(chartData, options);

	});
};

function buttonPressed(buttonTitle) {

	data = getData(buttonTitle);
};

//end
