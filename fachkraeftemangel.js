$(document).ready(function() {
  // Risiko Entwicklung
  const data = {
    labels: ["2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024"],
    datasets: [{
      label: "Entwicklung",
      data: [19, 11, 26, 19, 5, 13, 23, 10],
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

  const ctx = document.getElementById("entwicklung-fachkraeftemangel").getContext("2d");
  new Chart(ctx, {
    type: 'line',
    data: data,
    options: options
  });

  // Interessante Fakten
 
  const dataGrafik01 = {
    labels: ["2014", "2015", "2016", "2018", "2019", "2021", "2022", "2023", "2024"],
    datasets: [{
      label: "Firmen die Mühe haben Fachkräfte zu finden",
      data: [36, 38, 40, 45, 54, 69, 75, 77, 75],
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
        callbacks: {
          title: function(context) {
            var title = context[0].label || "";
            return title;
          },
          label: function(context) {
            var value = context.parsed.y;
            return value + "%";
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
  };
  
  const grafik01 = document.getElementById("fachkraeftemangel-grafik-01").getContext("2d");
  new Chart(grafik01, {
    type: "bar",
    data: dataGrafik01,
    options: optionsGrafik01
  });


  const dataGrafik02 = {
    labels: ["IT & Datenverarbeitung", "Maschinenbau/Ingenieur", "Verkauf & Marketing", "Betrieb & Logistik", "Kundenbetreuung"],
    datasets: [{
      label: "Folgende Fähigkeiten werden am Arbeitsmarkt am häufigsten gesucht",
      data: [27, 22, 20, 19, 17],
      backgroundColor: "#5487A6",
      maxBarThickness: 20,
      minBarLength: 2,
    }]
  };
  
  const optionsGrafik02 = {
    indexAxis: "y",
    scales: {
      x: {
        beginAtZero: true,
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
        callbacks: {
          
          label: function(context) {
            var value = context.parsed.x;
            return value + "%";
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
  };
  
  const grafik02 = document.getElementById("fachkraeftemangel-grafik-02").getContext("2d");
  new Chart(grafik02, {
    type: "bar",
    data: dataGrafik02,
    options: optionsGrafik02
  });

});
