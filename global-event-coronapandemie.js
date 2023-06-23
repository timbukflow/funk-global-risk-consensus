$(document).ready(function() {
  
  var grafik01 = document.getElementById('coronapandemie-grafik-01').getContext('2d');
  new Chart(grafik01, {
      type: 'bar',
      data: {
        labels: ['Jan 2020', 'Feb 2020', 'Mär 2020', 'Apr 2020', 'Mai 2020', 'Jun 2020', 'Jul 2020', 'Aug 2020', 'Sep 2020', 'Okt 2020', 'Nov 2020', 'Dez 2020', 'Jan 2021', 'Feb 2021', 'Mär 2021', 'Apr 2021', 'Mai 2021', 'Jun 2021', 'Jul 2021', 'Aug 2021', 'Sep 2021', 'Okt 2021', 'Nov 2021', 'Dez 2021', 'Jan 2022', 'Feb 2022', 'Mär 2022', 'Apr 2022', 'Mai 2022', 'Jun 2022', 'Jul 2022', 'Aug 2022', 'Sep 2022', 'Okt 2022', 'Nov 2022', 'Dez 2022', 'Jan 2023', 'Feb 2023', 'Mär 2023', 'Apr 2023', 'Mai 2023', 'Jun 2023', 'Jul 2023', ],
        datasets: [
          {
            label: 'Infektionszahlen',
            data: [9855, 75494, 737512, 2311997, 2889643, 4282862, 7045810, 8304549, 8704356, 12375338, 17094134, 19021961, 19736534, 11041006, 14458899, 22028637, 20194922, 11428630, 15831639, 19820037, 16127198, 13333376, 15402464, 24773986, 90097982, 59154523, 50347367, 24980757, 16094430, 17134348, 30347742, 24885932, 14595681, 13120284, 11522473, 91131109, 22838050, 4854077, 3877430, 3185136, 2186130, 600699],
            backgroundColor: 'rgba(54, 162, 235, 0.5)'
          }
        ]
      },
      options: {
        responsive: true,
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
                return "Wert: " + formattedValue;
              }
            } 
          }
        }
      }
    });
});