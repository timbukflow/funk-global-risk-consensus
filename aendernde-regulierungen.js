$(document).ready(function() {
  // Risiko Entwicklung
  const data = {
    labels: ["2017", "2018", "2019", "2020", "2021", "2022", "2023"],
    datasets: [{
      label: "Entwicklung",
      data: [0, 17, 18, 25, 25, 19, 10],
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

  const ctx = document.getElementById("entwicklung-aer").getContext("2d");
  new Chart(ctx, {
    type: 'line',
    data: data,
    options: options
  });

  // Interessante Fakten
  var goodsData = {
    labels: [
      "2016 JAN", "2016 FEB", "2016 MAR", "2016 APR", "2016 MAY", "2016 JUN", "2016 JUL", "2016 AUG", "2016 SEP", "2016 OCT", "2016 NOV", "2016 DEC",
      "2017 JAN", "2017 FEB", "2017 MAR", "2017 APR", "2017 MAY", "2017 JUN", "2017 JUL", "2017 AUG", "2017 SEP", "2017 OCT", "2017 NOV", "2017 DEC",
      "2018 JAN", "2018 FEB", "2018 MAR", "2018 APR", "2018 MAY", "2018 JUN", "2018 JUL", "2018 AUG", "2018 SEP", "2018 OCT", "2018 NOV", "2018 DEC",
      "2019 JAN", "2019 FEB", "2019 MAR", "2019 APR", "2019 MAY", "2019 JUN", "2019 JUL", "2019 AUG", "2019 SEP", "2019 OCT", "2019 NOV", "2019 DEC",
      "2020 JAN", "2020 FEB", "2020 MAR", "2020 APR", "2020 MAY", "2020 JUN", "2020 JUL", "2020 AUG", "2020 SEP", "2020 OCT", "2020 NOV", "2020 DEC",
      "2021 JAN", "2021 FEB", "2021 MAR", "2021 APR", "2021 MAY", "2021 JUN", "2021 JUL", "2021 AUG", "2021 SEP", "2021 OCT", "2021 NOV", "2021 DEC"
  ],
  datasets: [
      {
          label: "EU Exports",
          data: [
              93.5, 94.1, 94.0, 96.8, 96.5, 96.6, 94.9, 94.5, 95.6, 94.0, 95.3, 96.1,
              98.3, 98.4, 99.3, 99.7, 100.6, 101.6, 103.1, 103.1, 102.8, 101.8, 102.2, 102.3,
              103.1, 102.5, 101.9, 101.2, 101.6, 102.0, 103.7, 103.7, 102.0, 99.9, 99.5, 101.1,
              102.8, 104.9, 108.7, 103.6, 101.3, 94.7, 97.6, 96.7, 98.4, 100.3, 98.0, 98.3,
              95.7, 97.7, 92.0, 84.8, 79.0, 78.1, 81.6, 85.2, 88.0, 91.0, 93.7, 98.6,
              84.8, 79.7, 74.6, 84.8, 88.9, 88.8, 90.4, 87.4, 86.3, 86.4, 87.6, 91.1
          ],
          borderColor: "rgba(169, 151, 127, 0.5)",
          backgroundColor: "rgba(169, 151, 127, 0.5)",
          borderWidth: 1,
          pointRadius: 2,
          fill: false
      },
      {
          label: "Non-EU Exports",
          data: [
              87.8, 88.7, 88.9, 91.8, 92.1, 93.1, 88.3, 87.5, 85.8, 88.3, 88.3, 90.7,
              92.2, 94.5, 95.1, 97.7, 99.7, 99.2, 96.9, 95.0, 96.5, 97.8, 98.6, 98.2,
              98.0, 97.3, 98.5, 97.6, 97.9, 97.9, 98.4, 98.3, 99.5, 99.3, 99.4, 94.7,
              93.9, 93.1, 96.4, 96.6, 96.4, 95.3, 98.8, 102.8, 105.8, 105.0, 103.4, 102.6,
              99.7, 95.6, 90.1, 82.9, 76.7, 74.3, 76.3, 81.7, 82.3, 84.3, 85.2, 87.2,
              88.3, 86.6, 88.2, 88.6, 92.1, 90.4, 88.5, 84.1, 81.6, 81.0, 81.2, 82.1
          ],
          borderColor: "rgba(169, 151, 127, 1)",
          backgroundColor: "rgba(169, 151, 127, 1)",
          borderWidth: 1,
          pointRadius: 2,
          fill: false
      },
      {
          label: "EU Imports",
          data: [
              93.0, 93.3, 93.4, 95.8, 95.6, 97.0, 95.4, 96.0, 96.7, 96.2, 97.7, 98.2,
              99.7, 98.9, 98.7, 98.9, 98.7, 98.4, 98.2, 98.8, 98.6, 98.7, 97.9, 97.9,
              100.0, 99.6, 100.2, 99.0, 101.1, 100.8, 99.8, 97.9, 96.5, 96.9, 98.2, 99.4,
              101.5, 103.7, 109.2, 106.3, 102.6, 96.9, 96.9, 97.4, 97.7, 100.6, 98.4, 96.2,
              91.5, 91.5, 89.5, 80.7, 72.7, 70.2, 76.5, 82.5, 85.8, 89.5, 93.9, 99.1,
              91.7, 84.0, 75.4, 78.0, 80.2, 81.8, 82.8, 83.5, 83.4, 82.2, 81.7, 81.6
          ],
          borderColor: "rgba(84, 135, 166, 0.5)",
          backgroundColor: "rgba(84, 135, 166, 0.5)",
          borderWidth: 1,
          pointRadius: 2,
          fill: false
      },
      {
          label: "Non-EU Imports",
          data: [
              95.7, 96.4, 97.0, 100.5, 98.8, 97.9, 93.8, 96.2, 97.3, 98.0, 97.2, 98.0,
              100.3, 99.9, 101.1, 101.2, 103.3, 102.8, 103.0, 102.0, 102.2, 100.8, 101.2, 98.8,
              101.0, 98.0, 99.2, 96.3, 97.0, 95.9, 98.2, 101.7, 101.3, 102.9, 102.9, 104.5,
              105.9, 104.5, 105.0, 101.4, 102.0, 99.0, 99.2, 97.8, 98.1, 99.8, 98.9, 97.8,
              95.2, 94.6, 94.0, 87.6, 80.1, 76.9, 79.5, 84.7, 89.8, 94.3, 99.1, 100.3,
              96.8, 95.7, 96.3, 102.4, 104.5, 105.8, 105.4, 104.4, 106.6, 107.0, 110.0, 110.2
          ],
          borderColor: "rgba(84, 135, 166, 1)",
          backgroundColor: "rgba(84, 135, 166, 1)",
          borderWidth: 1,
          pointRadius: 2,
          fill: false
      }
  ]
};

var servicesData = {
    labels: [
        "2016 Q1", "2016 Q2", "2016 Q3", "2016 Q4",
        "2017 Q1", "2017 Q2", "2017 Q3", "2017 Q4",
        "2018 Q1", "2018 Q2", "2018 Q3", "2018 Q4",
        "2019 Q1", "2019 Q2", "2019 Q3", "2019 Q4",
        "2020 Q1", "2020 Q2", "2020 Q3", "2020 Q4",
        "2021 Q1", "2021 Q2", "2021 Q3"
    ],
    datasets: [
        {
            label: "EU Exports",
            data: [
                78.6, 81.4, 84.0, 87.5, 88.6, 90.6, 96.3, 94.1,
                98.4, 98.6, 96.3, 103.6, 94.5, 99.8, 101.6, 104.1,
                97.5, 82.4, 81.0, 87.4, 85.3, 85.8, 89.3
            ],
            borderColor: "rgba(169, 151, 127, 0.5)",
            backgroundColor: "rgba(169, 151, 127, 0.5)",
            borderWidth: 1,
            pointRadius: 2,
            fill: false
        },
        {
            label: "Non-EU Exports",
            data: [
                78.4, 80.6, 84.0, 88.4, 87.9, 87.9, 87.8, 86.0,
                90.7, 90.2, 93.8, 98.3, 95.8, 97.5, 102.5, 104.2,
                99.8, 87.1, 89.9, 93.9, 91.3, 92.7, 95.7
            ],
            borderColor: "rgba(169, 151, 127, 1)",
            backgroundColor: "rgba(169, 151, 127, 1)",
            borderWidth: 1,
            pointRadius: 2,
            fill: false
        },
        {
            label: "EU Imports",
            data: [
                75.2, 76.1, 82.6, 84.8, 84.2, 86.3, 87.8, 86.8,
                94.8, 98.2, 96.4, 104.5, 95.9, 97.9, 101.7, 104.5,
                89.5, 62.9, 60.3, 68.3, 62.9, 67.6, 64.6
            ],
            borderColor: "rgba(84, 135, 166, 0.5)",
            backgroundColor: "rgba(84, 135, 166, 0.5)",
            borderWidth: 1,
            pointRadius: 2,
            fill: false
        },
        {
            label: "Non-EU Imports",
            data: [
                73.2, 73.7, 79.2, 85.0, 82.6, 84.0, 84.1, 84.1,
                88.4, 88.3, 91.3, 96.4, 93.3, 100.0, 102.6, 104.0,
                94.4, 81.3, 85.0, 81.8, 87.5, 93.6, 91.4
            ],
            borderColor: "rgba(84, 135, 166, 1)",
            backgroundColor: "rgba(84, 135, 166, 1)",
            borderWidth: 1,
            pointRadius: 2,
            fill: false
        }
    ]
};

var optionschart = {
    responsive: true,
    title: {
        display: true,
        text: "Trade Chart"
    },
    scales: {
        y: {
            display: true,
            title: {
                display: true,
                text: "Trade Volume"
            }
        }
    },
    plugins: {
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

  var goodsChartCanvas = document.getElementById("aer-grafik-01");
  new Chart(goodsChartCanvas, {
      type: "line",
      data: goodsData,
      options: optionschart
  });

  var servicesChartCanvas = document.getElementById("aer-grafik-02");
  new Chart(servicesChartCanvas, {
      type: "line",
      data: servicesData,
      options: optionschart
  });

});
