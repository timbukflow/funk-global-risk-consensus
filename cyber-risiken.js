$(document).ready(function() {
  // Risiko Entwicklung
  const data = {
    labels: ["2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"],
    datasets: [{
      label: "Entwicklung",
      data: [48, 41, 36, 38, 36, 31, 29, 42, 37],
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

  const ctx = document.getElementById("entwicklung-cr").getContext("2d");
  new Chart(ctx, {
    type: 'line',
    data: data,
    options: options
  });

  // Grafik 01 - Barchart

  const dataGrafik01 = {
    labels: ["2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024"],
    datasets: [{
      label: "Durchschnittliche Kosten eines Datenschutzvorfalls",
      data: [3620000, 3860000, 3920000, 3860000, 4240000, 4350000, 4450000, 4880000 ],
      backgroundColor: "#5487A6",
      maxBarThickness: 20,
      minBarLength: 2,
    }]
  };
  
  const optionsGrafik01 = {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function(value, index, values) {
            return "$" + value.toLocaleString();
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
            return "$ " + value;
          }
        } 
      }
    }
  };
  
  const grafik01 = document.getElementById("cr-grafik-01").getContext("2d");
  new Chart(grafik01, {
    type: "bar",
    data: dataGrafik01,
    options: optionsGrafik01
  });

  // Grafik 02 - Linechart

  const dataGrafik02 = {
    labels: ["2018", "2019", "2020", "2021", "2022", "2023"],
    datasets: [
      {
        label: "Verarbeitende Industrie",
        data: [10, 8, 17.7, 23.2, 24.8, 25.7],
        borderColor: "rgba(169, 151, 127, 0.5)",
        backgroundColor: "rgba(169, 151, 127, 0.5)",
        borderWidth: 2,
        pointRadius: 2,
        fill: false
      },
      {
        label: "Finanz- und Versicherungsindustrie",
        data: [19, 17, 23, 22.4, 18.9, 18.2],
        borderColor: "rgba(169, 151, 127, 1)",
        backgroundColor: "rgba(169, 151, 127, 1)",
        borderWidth: 2,
        pointRadius: 2,
        fill: false
      },
      {
        label: "Dienstleistungsindustrie",
        data: [12, 10, 8.7, 12.7, 14.6, 15.4],
        borderColor: "rgba(84, 135, 166, 0.5)",
        backgroundColor: "rgba(84, 135, 166, 0.5)",
        borderWidth: 2,
        pointRadius: 2,
        fill: false
      },
      {
        label: "Energiesektor",
        data: [6, 6, 11.1, 8.2, 10.7, 11.1],
        borderColor: "rgba(84, 135, 166, 1)",
        backgroundColor: "rgba(84, 135, 166, 1)",
        borderWidth: 2,
        pointRadius: 2,
        fill: false
      },
      {
        label: "Einzel- und Grosshandel",
        data: [11, 16, 10.2, 7.3, 8.7, 10.7],
        borderColor: "rgba(104, 192, 181, 0.5)",
        backgroundColor: "rgba(104, 192, 181, 0.5)",
        borderWidth: 2,
        pointRadius: 2,
        fill: false
      },
      {
        label: "Bildungswesen",
        data: [6, 8, 4, 2.8, 7.3, 2.8],
        borderColor: "rgba(104, 192, 181, 1)",
        backgroundColor: "rgba(104, 192, 181, 1)",
        borderWidth: 2,
        pointRadius: 2,
        fill: false
      },
      {
        label: "Gesundheitswesen",
        data: [6, 3, 6.6, 5.1, 5.8, 6.3],
        borderColor: "rgba(117, 184, 69, 0.5)",
        backgroundColor: "rgba(117, 184, 69, 0.5)",
        borderWidth: 2,
        pointRadius: 2,
        fill: false
      },
      {
        label: "Verwaltung",
        data: [8, 8, 7.9, 2.8, 4.8, 4.3],
        borderColor: "rgba(117, 184, 69, 1)",
        backgroundColor: "rgba(117, 184, 69, 1)",
        borderWidth: 2,
        pointRadius: 2,
        fill: false
      },
      {
        label: "Transportwesen",
        data: [13, 13, 5.1, 4, 3.9, 4.3],
        borderColor: "rgba(44, 120, 95, 0.5)",
        backgroundColor: "rgba(44, 120, 95, 0.5)",
        borderWidth: 2,
        pointRadius: 2,
        fill: false
      },
      {
        label: "Medien und Telekommunikation",
        data: [8, 10, 5.7, 2.5, 0.5, 1.2],
        borderColor: "rgba(44, 120, 95, 1)",
        backgroundColor: "rgba(44, 120, 95, 1)",
        borderWidth: 2,
        pointRadius: 2,
        fill: false
      }
    ]
  };  
  
  const optionsGrafik02 = {
    scales: {
      y: {
        ticks: {
          callback: function(value) {
            return value + "%";
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
        }
      }
    }
  };
  
  const grafik02 = document.getElementById("cr-grafik-02").getContext("2d");
  new Chart(grafik02, {
    type: "line",
    data: dataGrafik02,
    options: optionsGrafik02
  });

});
