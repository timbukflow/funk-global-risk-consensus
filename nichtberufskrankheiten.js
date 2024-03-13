$(document).ready(function() {
  // Risiko Entwicklung
  const data = {
    labels: ["2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024"],
    datasets: [{
      label: "Entwicklung",
      data: [0, 0, 0, 0, 29, 31, 11, 5],
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

  const ctx = document.getElementById("entwicklung-nichtberufskrankheiten").getContext("2d");
  new Chart(ctx, {
    type: 'line',
    data: data,
    options: options
  });

  // Interessante Fakten

  const grafik01 = document.getElementById('nbk-grafik-01').getContext('2d');
    new Chart(grafik01, {
      type: 'line',
      data: {
        labels: ['1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'],
        datasets: [
          {
            label: 'Geleistete Arbeitsstunden [in Millionen Stunden]',
            data: [6785, 6823, 6736, 6626, 6579, 6699, 6840, 6888, 6840, 6800, 6830, 6974, 7004, 7111, 7250, 7382, 7378, 7221, 7394, 7452, 7448, 7549, 7724, 7834, 7815, 7857, 7903, 7608, 7819, 7922],
            backgroundColor: '#5487A6',
            borderColor: '#5487A6',
            borderWidth: 1,
            pointRadius: 2,
          }
        ]
      },
      options: {
        scales: {
          y: {
            ticks: {
              callback: function(value) {
                return value.toLocaleString('de-CH');
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
              label: function(context) {
                const value = context.parsed.y || 0;
                const formattedValue = value.toLocaleString('de-CH');
                return formattedValue + " Millionen Stunden";
              }
            }
          }
        }
      }
    });
});