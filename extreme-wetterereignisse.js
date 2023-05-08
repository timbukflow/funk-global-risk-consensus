var data = {
  labels: ["2017", "2018", "2019", "2020", "2021", "2022", "2023"],
  datasets: [{
    label: "entwicklung",
    data: [0, 16, 15, 18, 16, 14, 15],
    borderColor: "#005092",
    borderWidth: 2,
    backgroundColor: "#005092",
   
  }]
};

// Chart-Optionen definieren
var options = {
  legend: {
    position: 'right',
    labels: {
      boxWidth: 1 // Legendenquadrat auf 1px festlegen
    },
    textAlign: 'left' // Textausrichtung der Legendenbeschriftungen auf die linke Seite setzen
  },
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true,
        max: 50
      }
    }]
  }
};

// Chart erstellen
var ctx = document.getElementById("myChart").getContext("2d");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: data,
  options: options
});