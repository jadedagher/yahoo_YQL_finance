//top 


google.charts.load('current', {'packages': ['corechart']});

google.charts.setOnLoadCallback(drawChart);

	var data_RealTime = getData_RealTime("year");

	var options_RealTime = {
		title: 'Real time data',
		curveType: 'function',
		colors: ['#15A0C8'],
		legend: {
			position: 'bottom'
		}
	};

function drawChart_RealTime() {

	var chartData_RealTime = google.visualization.arrayToDataTable(data_RealTime);

	var chart_RealTime = new google.visualization.LineChart(document.getElementById('realTime_chart_div'));
	chart_RealTime.draw(chartData_RealTime, options_RealTime);

}

function getData_RealTime(dataRange) {
	
	var dataArray_RealTime = [
		['Date','Stock Value USD'],
	];

	var BASE_URL = 'https://query.yahooapis.com/v1/public/yql?q=';
	var yql_query = 'select * from yahoo.finance.quote where symbol in ("YHOO","AAPL","GOOG","MSFT")';
	var yql_query_str = encodeURI(BASE_URL + yql_query);
	var query_str_final = yql_query_str + "&format=json&diagnostics=true&env=store%3A%_RealTimeF%_RealTimeFdatatables.org%_RealTimeFalltableswithkeys";


	$.getJSON(query_str_final, function(data_RealTime) {

		var stockArray_RealTime = data_RealTime.query.results.quote;

		for (var i = 0; i < stockArray_RealTime.length; i++) {
			var currentObject_RealTime = stockArray_RealTime[i];
			console.log(currentObject_RealTime.Close);
			var pushedArray_RealTime = [currentObject_RealTime.Date, parseFloat(currentObject_RealTime.Close)];
			dataArray_RealTime[i+1] = pushedArray_RealTime;
		}
		// console.log(dataArray);
	var chartData_RealTime = google.visualization.arrayToDataTable(dataArray_RealTime);

	var chart_RealTime = new google.visualization.LineChart(document.getElementById('realTime_chart_div'));
	chart.draw(chartData_RealTime, options_RealTime);

	});
};
//end
