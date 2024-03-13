$(document).ready(function() {
  // Risiko Entwicklung
  const data = {
    labels: ["2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024"],
    datasets: [{
      label: "Entwicklung",
      data: [0, 0, 0, 0, 4, 0, 6, 16],
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

  // Grafik 01

  const dataGrafik01 = {
    labels: [
        "Zusätzliche Kosten",
        "Umsatzeinbussen",
        "Produktivitätsverlust",
        "Kundenbeschwerden",
        "Besorgnis bei den Aktionären und Stakeholdern",
        "Beeinträchtigungen der Dienstleistungen",
        "Erhöhte Regulatorische Überwachung",
        "Verzögerte Geld-/Zahlungsflüsse",
        "Image-Schaden",
        "Kundenverluste",
        "Verzögerungen von Produkteinführungen",
        "Aktienkursverluste",
        "Produktrückruf",
        "Kompensationszahlungen",
        "Busse von Regulationsbehörden"
    ],
    datasets: [{
        data: [
            84.6,
            77.6,
            76.4,
            73.8,
            73.7,
            66.7,
            63.8,
            62.2,
            57.4,
            54.8,
            52.7,
            43.3,
            41.1,
            39.5,
            29.9
        ],
        backgroundColor: "#5487A6",
        maxBarThickness: 10,
        minBarLength: 2,
    }]
};

  
  const optionsGrafik01 = {
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
        display: false
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
  
  const grafik01 = document.getElementById("supply-chain-grafik-01").getContext("2d");
  new Chart(grafik01, {
    type: "bar",
    data: dataGrafik01,
    options: optionsGrafik01
  });

});
