$(document).ready(function() {
  // Risiko Entwicklung
  const data = {
    labels: ["2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"],
    datasets: [{
      label: "Entwicklung",
      data: [19, 11, 26, 19, 5, 13, 23, 10, 15],
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
    labels: ["2014", "2015", "2016", "2018", "2019", "2021", "2022", "2023", "2024", "2025"],
    datasets: [{
      label: "Firmen die Mühe haben Fachkräfte zu finden",
      data: [36, 38, 40, 45, 54, 69, 75, 77, 75, 74],
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


  // Berufsbezeichnungen separat für Tooltips
const berufstitel = [
  "Spezialist:innen in Gesundheitsberufen",
  "Bauführer:innen, Polier:innen und Produktionsleiter:innen",
  "Elektriker:innen und Elektroniker:innen",
  "Ingenieurtechnische und vergleichbare Fachkräfte",
  "Fachkräfte im Bereich Finanzen und mathematische Verfahren"
];

const dataGrafik02 = {
  labels: [
    "1. Rang",
    "2. Rang",
    "3. Rang",
    "4. Rang",
    "5. Rang"
  ],
  datasets: [
    {
      label: "Tertiär (z.B. Uni, FH, HF)",
      data: [89, 62, 5, 34, 74],
      backgroundColor: "#5487A6",
      maxBarThickness: 40
    },
    {
      label: "Sekundar II (Berufslehre, Gymnasium etc.)",
      data: [11, 38, 95, 66, 25],
      backgroundColor: "#A5C4D4",
      maxBarThickness: 40
    }
  ]
};

const optionsGrafik02 = {
  indexAxis: "x",
  responsive: true,
  scales: {
    y: {
      beginAtZero: true,
      max: 100,
      ticks: {
        callback: function(value) {
          return value + "%";
        }
      }
    },
    x: {
      ticks: {
        maxRotation: 0,
        minRotation: 0,
        font: {
          size: 12
        }
      }
    }
  },
  plugins: {
    legend: {
      position: "bottom"
    },
    tooltip: {
      callbacks: {
        beforeTitle: function(context) {
          // Zeigt den vollständigen Berufstitel anstelle von "1. Rang" usw.
          const index = context[0].dataIndex;
          return berufstitel[index];
        },
        title: function() {
          return ""; // Unterdrückt "1. Rang" als Titel
        },
        label: function(context) {
          return context.dataset.label + ": " + context.parsed.y + "%";
        }
      },
      cornerRadius: 5,
      displayColors: true,
      titleFont: { size: 14 },
      bodyFont: { size: 14 }
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
