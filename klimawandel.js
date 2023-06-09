$(document).ready(function() {
  // Risiko Entwicklung
  const data = {
    labels: ["2017", "2018", "2019", "2020", "2021", "2022", "2023"],
    datasets: [{
      label: "Entwicklung",
      data: [6, 11, 11, 4, 4, 22, 9],
      borderColor: "#005092",
      backgroundColor: "#005092",
      borderWidth: 2,
      pointRadius: 2,
    }]
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        max: 50,
        ticks: {
          stepSize: 1
        }
      }
    },
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        cornerRadius: 5,
        displayColors: false,
        titleFont: {
          size: 14
        },
        bodyFont: {
          size: 14
        }
      }
    }
  };

  const ctx = document.getElementById("entwicklung-klimawandel").getContext("2d");
  new Chart(ctx, {
    type: 'line',
    data: data,
    options: options
  });

  // Interessante Fakten
 
});
