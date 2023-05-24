$(document).ready(function() {
  // Risiko Entwicklung
  const data = {
    labels: ["2017", "2018", "2019", "2020", "2021", "2022", "2023"],
    datasets: [{
      label: "Entwicklung",
      data: [29, 31, 36, 38, 36, 41, 48],
      borderColor: "#005092",
      borderWidth: 2,
      backgroundColor: "#005092",
      hoverBackgroundColor: "white",  
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
  const myLineChart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: options
  });

  // Grafik 01 - Barchart

  const dataGrafik01 = {
    labels: ["2017", "2018", "2019", "2020", "2021", "2022"],
    datasets: [{
      label: "Durchschnittliche Kosten eines Datenschutzvorfalls",
      data: [3620000, 3860000, 3920000, 3860000, 4240000, 4350000],
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
    labels: ["2022", "2021", "2020", "2019", "2018"],
    datasets: [
      {
        label: "Manufacturing",
        data: [24.8, 23.2, 17.7, 8, 10],
        borderColor: "rgba(169, 151, 127, 0.5)",
        backgroundColor: "rgba(169, 151, 127, 0.5)",
        borderWidth: 2,
        fill: false
      },
      {
        label: "Finance and insurance",
        data: [18.9, 22.4, 23, 17, 19],
        borderColor: "rgba(169, 151, 127, 1)",
        backgroundColor: "rgba(169, 151, 127, 1)",
        borderWidth: 2,
        fill: false
      },
      {
        label: "Professional, business and consumer services",
        data: [14.6, 12.7, 8.7, 10, 12],
        borderColor: "rgba(84, 135, 166, 0.5)",
        backgroundColor: "rgba(84, 135, 166, 0.5)",
        borderWidth: 2,
        fill: false
      },
      {
        label: "Energy",
        data: [10.7, 8.2, 11.1, 6, 6],
        borderColor: "rgba(84, 135, 166, 1)",
        backgroundColor: "rgba(84, 135, 166, 1)",
        borderWidth: 2,
        fill: false
      },
      {
        label: "Retail and wholesale",
        data: [8.7, 7.3, 10.2, 16, 11],
        borderColor: "rgba(104, 192, 181, 0.5)",
        backgroundColor: "rgba(104, 192, 181, 0.5)",
        borderWidth: 2,
        fill: false
      },
      {
        label: "Education",
        data: [7.3, 2.8, 4, 8, 6],
        borderColor: "rgba(104, 192, 181, 1)",
        backgroundColor: "rgba(104, 192, 181, 1)",
        borderWidth: 2,
        fill: false
      },
      {
        label: "Healthcare",
        data: [5.8, 5.1, 6.6, 3, 6],
        borderColor: "rgba(117, 184, 69, 0.5)",
        backgroundColor: "rgba(117, 184, 69, 0.5)",
        borderWidth: 2,
        fill: false
      },
      {
        label: "Government",
        data: [4.8, 2.8, 7.9, 8, 8],
        borderColor: "rgba(117, 184, 69, 1)",
        backgroundColor: "rgba(117, 184, 69, 1)",
        borderWidth: 2,
        fill: false
      },
      {
        label: "Transportation",
        data: [3.9, 4, 5.1, 13, 13],
        borderColor: "rgba(44, 120, 95, 0.5)",
        backgroundColor: "rgba(44, 120, 95, 0.5)",
        borderWidth: 2,
        fill: false
      },
      {
        label: "Media and telecom",
        data: [0.5, 2.5, 5.7, 10, 8],
        borderColor: "rgba(44, 120, 95, 1)",
        backgroundColor: "rgba(44, 120, 95, 1)",
        borderWidth: 2,
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
