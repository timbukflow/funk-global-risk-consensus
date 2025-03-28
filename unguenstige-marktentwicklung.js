$(document).ready(function() {
  // Risiko Entwicklung
  const data = {
    labels: ["2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"],
    datasets: [{
      label: "Entwicklung",
      data: [42, 0, 7, 23, 22, 17, 0, 7, 8],
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

  const ctx = document.getElementById("entwicklung-unguenstige-marktentwicklung").getContext("2d");
  new Chart(ctx, {
    type: 'line',
    data: data,
    options: options
  });

  // Interessante Fakten

  var grafik01 = document.getElementById('ume-grafik-01').getContext('2d');
  new Chart(grafik01, {
      type: 'line',
      data: {
        labels: ["Q1-2018", "Q2-2018", "Q3-2018", "Q4-2018", "Q1-2019", "Q2-2019", "Q3-2019", "Q4-2019", "Q1-2020", "Q2-2020", "Q3-2020", "Q4-2020", "Q1-2021", "Q2-2021", "Q3-2021", "Q4-2021", "Q1-2022", "Q2-2022", "Q3-2022", "Q4-2022", "Q1-2023"],
        datasets: [
          {
            label: 'Österreich',
            data: [0.8, 0.2, 0.4, 1.2, 0.5, -0.4, 0.5, -0.5, -2.3, -11.5, 11.3, -1.8, -1.0, 4.0, 4.2, -0.9, 1.3, 1.7, 0.0, -0.1, 0.1],
            borderColor: "rgba(169, 151, 127, 0.5)",
            backgroundColor: "rgba(169, 151, 127, 0.5)",
            pointRadius: 0,
            borderWidth: 1
          },
          {
            label: 'Frankreich',
            data: [0.0, 0.4, 0.5, 0.5, 0.7, 0.7, 0.1, -0.4, -5.3, -13.1, 17.4, -0.7, 0.0, 1.0, 3.1, 0.5, -0.1, 0.5, 0.2, -0.0, 0.2],
            borderColor: "rgba(169, 151, 127, 1)",
            backgroundColor: "rgba(169, 151, 127, 1)",
            pointRadius: 0,
            borderWidth: 1
          },
          {
            label: 'Deutschland',
            data: [-0.6, 0.7, -0.8, 0.8, 0.7, -0.2, 0.1, 0.3, -1.4, -9.5, 9.0, 0.6, -1.5, 1.9, 0.8, -0.0, 1.0, -0.1, 0.5, -0.5, -0.3],
            borderColor: "rgba(84, 135, 166, 0.5)",
            backgroundColor: "rgba(84, 135, 166, 0.5)",
            pointRadius: 0,
            borderWidth: 1
          },
          {
            label: 'Italien',
            data: [-0.1, 0.0, 0.1, 0.3, 0.2, 0.2, 0.1, -0.8, -5.8, -12.0, 14.2, -0.7, 0.5, 2.5, 2.9, 0.9, 0.1, 1.0, 0.4, -0.1, 0.6],
            borderColor: "rgba(84, 135, 166, 1)",
            backgroundColor: "rgba(84, 135, 166, 1)",
            pointRadius: 0,
            borderWidth: 1
          },
          {
            label: 'Japan',
            data: [0.1, 0.3, -0.5, -0.1, 0.2, 0.3, 0.3, -2.8, 0.4, -8.0, 5.7, 1.9, -0.2, 0.3, -0.3, 1.2, -0.5, 1.1, -0.2, -0.0, 0.4],
            borderColor: "rgba(104, 192, 181, 0.5)",
            backgroundColor: "rgba(104, 192, 181, 0.5)",
            pointRadius: 0,
            borderWidth: 1
          },
          {
            label: 'Schweiz',
            data: [1.1, 0.9, -0.3, 0.3, 0.1, 0.4, 0.5, 0.6, -1.5, -7.1, 7.3, 0.3, -0.2, 2.0, 1.7, 0.2, 0.3, 0.3, 0.2, -0.0, 0.3],
            borderColor: "rgba(104, 192, 181, 1)",
            pointRadius: 0,
            backgroundColor: "rgba(104, 192, 181, 1)",
            borderWidth: 1
          },
          {
            label: ' Vereinigtes Königreich',
            data: [0.1, 0.5, 0.6, 0.3, 0.6, 0.1, 0.6, -0.0, -2.6, -21.0, 16.6, 1.2, -1.1, 6.5, 1.7, 1.5, 0.5, 0.1, -0.1, 0.1, 0.1],
            borderColor: "rgba(117, 184, 69, 0.5)",
            backgroundColor: "rgba(117, 184, 69, 0.5)",
            pointRadius: 0,
            borderWidth: 1
          },
          {
            label: 'USA',
            data: [0.7, 0.7, 0.7, 0.2, 0.5, 0.7, 0.9, 0.4, -1.2, -8.5, 7.9, 1.0, 1.5, 1.7, 0.7, 1.7, -0.4, -0.1, 0.8, 0.6, 0.3],
            borderColor: "rgba(117, 184, 69, 1)",
            backgroundColor: "rgba(117, 184, 69, 1)",
            pointRadius: 0,
            borderWidth: 1
          },
          {
            label: 'China',
            data: [1.9, 1.7, 1.4, 1.4, 1.6, 1.4, 1.3, 1.2, -10.3, 11.8, 3.3, 2.5, 0.7, 1.6, 0.4, 1.6, 0.8, -2.3, 3.9, 0.6, 2.2],
            borderColor: "rgba(44, 120, 95, 0.5)",
            backgroundColor: "rgba(44, 120, 95, 0.5)",
            pointRadius: 0,
            borderWidth: 1
          },
          {
            label: 'Indien',
            data: [2.1, 1.3, 1.4, 1.5, 1.0, 1.5, 0.6, 0.2, 0.1, -22.5, 22.6, 6.3, 1.4, -7.5, 9.3, 2.0, 0.5, 1.1, 1.9, 1.0, 1.9],
            borderColor: "rgba(44, 120, 95, 1)",
            backgroundColor: "rgba(44, 120, 95, 1)",
            pointRadius: 0,
            borderWidth: 1
          }
        ]
      },
      options: {
        responsive: true,
        scales: {
          x: {
            display: true,
            title: {
              display: false,
            }
          },
          y: {
            display: true,
            title: {
              display: true,
              text: 'Quartalsweiser Veränderung des Bruttoinlandsprodukts'
            }
          }
        }
      }
    });
 
});
