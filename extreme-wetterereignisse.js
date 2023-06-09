$(document).ready(function() {
  // Risiko Entwicklung
  const data = {
    labels: ["2017", "2018", "2019", "2020", "2021", "2022", "2023"],
    datasets: [{
      label: "Entwicklung",
      data: [0, 16, 15, 18, 16, 14, 15],
      borderColor: "#005092",
      borderWidth: 2,
      backgroundColor: "#005092",
      pointRadius: 2  
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

  const ctx = document.getElementById("entwicklung-ew").getContext("2d");
  const myLineChart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: options
  });


  // Pie - Style
  const pieStyle = {
    backgroundColor: ['#60A3D9', '#5487A6', ' #A9977F', '#BFBFBF'],
    hoverOffset: 10,
    borderWidth: 1,
    cutout: '70%',
    font: {
      family: "'Noto Serif', serif",
      size: 16,
      weight: 'normal'
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
    },
    padding: {
      top: 10,
      right: 10,
      bottom: 10,
      left: 10
    }
  };

  // Pie - Economic losses
  const dataPieEconomicLosses = {
    labels: ['Hydrologische Ereignisse', 'Meteorologische Ereignisse', 'Klimatologische Ereignisse - Hitzewelle', 'Klimatologische Ereignisse - Andere'],
    datasets: [{
      label: 'Mio',
      data: [223060, 173893, 70804, 41680],
      backgroundColor: pieStyle.backgroundColor,
      hoverOffset: pieStyle.hoverOffset,
      borderWidth: pieStyle.borderWidth,
      cutout: pieStyle.cutout
    }],
  };

  const optionsPieEconomicLosses = {
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: ['Wirtschaftliche Schäden','509 Mrd. EUR'],
        align: 'start',
        font: pieStyle.font
      },
      tooltip: pieStyle.tooltip,
    },
    layout: {
      padding: pieStyle.padding
    }
  };

  const ctxPieEconomicLosses = document.getElementById('pie-economic-losses').getContext('2d');
  const PieEconomicLosses = new Chart(ctxPieEconomicLosses, {
    type: 'doughnut',
    data: dataPieEconomicLosses,
    options: optionsPieEconomicLosses
  });


  // Pie - Insured economic losses
  const dataPieInsuredEconomicLosses = {
    labels: ['Hydrologische Ereignisse', 'Meteorologische Ereignisse', 'Klimatologische Ereignisse - Hitzewelle', 'Klimatologische Ereignisse - Andere'],
    datasets: [{
      label: 'Mio',
      data: [33320, 64896, 7773, 10406],
      backgroundColor: pieStyle.backgroundColor,
      hoverOffset: pieStyle.hoverOffset,
      borderWidth: pieStyle.borderWidth,
      cutout: pieStyle.cutout
    }],
  };

  const optionsPieInsuredEconomicLosses = {
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: ['Versicherte wirtschaftliche Schäden','116 Mrd. EUR'],
        align: 'start',
        font: pieStyle.font
      },
      tooltip: pieStyle.tooltip,
    },
    layout: {
      padding: pieStyle.padding
    }
  };

  const ctxPieInsuredEconomicLosses = document.getElementById('pie-insured-economic-losses').getContext('2d');
  const PieInsuredEconomicLosses = new Chart(ctxPieInsuredEconomicLosses, {
    type: 'doughnut',
    data: dataPieInsuredEconomicLosses,
    options: optionsPieInsuredEconomicLosses
  });


  // Pie - Fatalities
  const dataPieFatalities = {
    labels: ['Hydrologische Ereignisse', 'Meteorologische Ereignisse', 'Klimatologische Ereignisse - Hitzewelle', 'Klimatologische Ereignisse - Andere'],
    datasets: [{
      label: 'Mio',
      data: [5225, 4246, 129848, 2782],
      backgroundColor: pieStyle.backgroundColor,
      hoverOffset: pieStyle.hoverOffset,
      borderWidth: pieStyle.borderWidth,
      cutout: pieStyle.cutout
    }],
  };

  const optionsPieFatalities = {
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: ['Todesopfer','142 Mrd.'],
        align: 'start',
        font: pieStyle.font
      },
      tooltip: pieStyle.tooltip,
    },
    layout: {
      padding: pieStyle.padding
    }
  };

  const ctxPieFatalities = document.getElementById('pie-fatalities').getContext('2d');
  const PieFatalities = new Chart(ctxPieFatalities, {
    type: 'doughnut',
    data: dataPieFatalities,
    options: optionsPieFatalities
  });


  // More Events

});
