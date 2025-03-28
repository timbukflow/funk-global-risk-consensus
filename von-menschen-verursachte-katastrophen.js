$(document).ready(function() {
  // Risiko Entwicklung
  const data = {
    labels: ["2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"],
    datasets: [{
      label: "Entwicklung",
      data: [24, 4, 4, 0, 0, 0, 0, 0, 0],
      borderColor: "#005092",
      backgroundColor: "#005092",
      borderWidth: 1,
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

  const ctx = document.getElementById("entwicklung-von-menschen-verursachte-katastrophen").getContext("2d");
  new Chart(ctx, {
    type: 'line',
    data: data,
    options: options
  });

  // Interessante Fakten
 
  var grafik01 = document.getElementById('vmvk-grafik-01').getContext('2d');
  new Chart(grafik01, {
      type: 'bar',
      data: {
        labels: ["Tshernobyl, Ukraine (1986)", "Deepwater Horizon, USA (2010)", "Exxon Valdez, USA (1989)", "Brumadinho, Brasilien (2019)", "Costa Concordia, Italien (2012)"],
        datasets: [
          {
            label: 'Gesammtschadensumme [in Mrd. $]',
            data: [700, 144.9, 6.8, 3.66, 2],
            backgroundColor: "#5487A6",
          }
        ]
      },
      options: {
        indexAxis: "y",
        plugins: {
          legend: {
            display: true
          },
          tooltip: {
            callbacks: {
              
              label: function(context) {
                var value = context.parsed.x;
                return value + " Mrd $";
              }
            },
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
      }
    });
});
