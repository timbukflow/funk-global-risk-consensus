$(document).ready(function() {
  
  var grafik01 = document.getElementById('dsgvo-grafik-01').getContext('2d');
  new Chart(grafik01, {
      type: 'bar',
      data: {
        labels: ["Industrie", "Medien", "Finanzindustrie (exkl. Banken)", "Reisebranche", "Gesundheitsindustrie", "Detailhandel", "Energie", "IT und Telekommunikation", "Banken"],
        datasets: [
          {
            label: 'DSGVO Implementierungskosten',
            data: [6, 8, 9.5, 12, 13, 18, 23, 24, 79],
            backgroundColor: '#60A3D9',
          }
        ]
      },
      options: {
        responsive: true,
        indexAxis: "y",
        scales: {
          y: {
            ticks: {
              font: {
                size: 14
              }
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
            },
            callbacks: {
              label: function(tooltipItem) {
                const value = tooltipItem.formattedValue;
                return value + ' Mio. €';
              }
            } 
          }
        }
      }
    });
});