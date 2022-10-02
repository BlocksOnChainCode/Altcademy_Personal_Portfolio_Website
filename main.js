
/*------------------------------*/

//Google charts for tech stacks used
// Load google charts
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

// Draw the chart and set the chart values
function drawChart() {
  var data = google.visualization.arrayToDataTable([
  ['Task', 'Hours per Day'],
  ['HTML', 8],
  ['CSS', 2],
]);

  // Optional; add a title and set the width and height of the chart
  var options = {'width':400, 'height':200};

  // Display the chart inside the <div> element with id="piechart"
  var chart = new google.visualization.PieChart(document.getElementById('piechart'));
  chart.draw(data, options); 
}