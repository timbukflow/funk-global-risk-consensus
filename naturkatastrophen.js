$(document).ready(function() {
  // Risiko Entwicklung
  const data = {
    labels: ["2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"],
    datasets: [{
      label: "Entwicklung",
      data: [25, 17, 17, 18, 14, 8, 7, 12, 8],
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

  const ctx = document.getElementById("entwicklung-naturkatastrophen").getContext("2d");
  new Chart(ctx, {
    type: 'line',
    data: data,
    options: options
  });

  // Interessante Fakten
 
  const grafik01 = document.getElementById('nk-grafik-01').getContext('2d');
    new Chart(grafik01, {
      type: 'bar',
      data: {
        labels: ['Fukushima, Japan (2011)', 'Kobe, Japan (1995)', 'Sichuan, China (2008)', 'Northridge, USA (1994)', 'Kumamoto, Japan (2016)'],
        datasets: [
          {
            label: 'Gesamtschadensumme (in Mrd. $)',
            data: [210, 100, 85, 44, 32],
            backgroundColor: "#5487A6",
          },
          {
            label: 'Versicherte Schäden (in Mrd. $)',
            data: [40, 3, 0, 15, 7],
            backgroundColor: "#68C0B5",
          }
        ]
      },
      options: {
        plugins: {
          legend: {
            display: true
          },
          tooltip: {
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
                return value + " Mrd. $";
              }
            }
          }
        }
      }
    });
});
