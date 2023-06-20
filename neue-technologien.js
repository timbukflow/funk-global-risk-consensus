$(document).ready(function() {
  // Risiko Entwicklung
  const data = {
    labels: ["2017", "2018", "2019", "2020", "2021", "2022", "2023"],
    datasets: [{
      label: "Entwicklung",
      data: [17, 19, 21, 7, 0, 0, 0],
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

  const ctx = document.getElementById("entwicklung-neue-technologien").getContext("2d");
  new Chart(ctx, {
    type: 'line',
    data: data,
    options: options
  });

  // Interessante Fakten 

  const grafik01 = document.getElementById('nt-grafik-01').getContext('2d');
    new Chart(grafik01, {
      type: 'bar',
      data: {
        labels: ['2001', '2004', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021'],
        datasets: [
          {
            label: 'Teleheimarbeit',
            data: [6.70, 10.20, 18.10, 19.60, 20.40, 21.60, 25.70, 26.50, 27.40, 37.10, 39.80],
            backgroundColor: '#5487A6',
          }
        ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: function(value) {
                return value + '%';
              }
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
            },
            callbacks: {
              label: function(tooltipItem) {
                const value = tooltipItem.formattedValue;
                return value + "% ";
              }
            } 
          }
        }
      }
    });
 
});
