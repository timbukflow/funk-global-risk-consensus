var data = {
  labels: ["2017", "2018", "2019", "2020", "2021", "2022", "2023"],
  datasets: [{
    label: "Meine Daten",
    data: [0, 16, 15, 18, 16, 14, 15],
    borderColor: "rgb(255, 99, 132)",
    backgroundColor: "rgba(255, 99, 132, 0.2)"
  }]
};

// Chart-Optionen definieren
var options = {
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