$(document).ready(function() {
  // Risiko Entwicklung
  const data = {
    labels: ["2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"],
    datasets: [{
      label: "Entwicklung",
      data: [0, 0, 0, 1, 3, 7, 17, 16, 14],
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

  const ctx = document.getElementById("entwicklung-mv").getContext("2d");
  new Chart(ctx, {
    type: 'line',
    data: data,
    options: options
  });

  // Interessante Fakten

  const grafik01 = document.getElementById('mv-grafik-01').getContext('2d');
  new Chart(grafik01, {
      type: 'bar',
      data: {
        labels: ['FED (United States)', 'BoE (Great Britain)', 'EZB (Europe)', 'SNB (Switzerland)'],
        datasets: [
          {
            label: 'Zinssatz 2020',
            data: [0.25, 0.10, 0, -0.25],
            backgroundColor: 'rgba(117, 184, 69, 0.5)',
          },
          {
            label: 'Zinssatz 2023',
            data: [5.25, 4.50, 3.75, 1.50],
            backgroundColor: 'rgba(117, 184, 69, 1)',
          },
          {
            label: 'Zinssatz 2024',
            data: [5.5, 5.25, 4.5, 1.75],
            backgroundColor: '#5487A6',
          }
        ]
      },
      options: {
        scales: {
          y: {
            min: -2,
            ticks: {
              callback: function(value) {
                return value + '%';
              }
            }
          }
        },
        plugins: {
          legend: {
            display: true
          },
          tooltip: {
            cornerRadius: 5,
            displayColors: false,
            titleFont: {
              size: 14
            },
            bodyFont: {
              size: 14
            },
            callbacks: {
              label: function(tooltipItem) {
                const value = tooltipItem.formattedValue;
                return value + '%';
              }
            } 
          }
        }
      }
    });
 
});
