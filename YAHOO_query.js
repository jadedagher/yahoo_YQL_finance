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
	document.getElementById("DaysHigh").innerHTML = "Days High (this year): " + DaysHigh +" USD";

	var DaysLow = Stock_data.query.results.quote[0].DaysLow;
	document.getElementById("DaysLow").innerHTML = "Days Low (this year): " + DaysLow +" USD";

	var LastTradePriceOnly = Stock_data.query.results.quote[0].LastTradePriceOnly;
	document.getElementById("LastTradePriceOnly").innerHTML = "Last Trade Price Only: " + LastTradePriceOnly +" USD";

	//to Call (other id)
	var LastTradePriceOnly = Stock_data.query.results.quote[0].LastTradePriceOnly;
	document.getElementById("LastTradePriceOnlyToCall").innerHTML = " X " + LastTradePriceOnly +" USD";
	//
	//to put (other id)
	var LastTradePriceOnly = Stock_data.query.results.quote[0].LastTradePriceOnly;
	document.getElementById("LastTradePriceOnlyToPut").innerHTML = " X " + LastTradePriceOnly +" USD";
	//


	var MarketCapitalization = Stock_data.query.results.quote[0].MarketCapitalization;
	document.getElementById("MarketCapitalization").innerHTML = "Market Capitalization: " + MarketCapitalization +" USD";

});
