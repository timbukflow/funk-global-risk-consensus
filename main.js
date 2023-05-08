$(document).ready(function() {
  
  // time
  function updateTime() {
    const now = new Date();
    const time = now.toLocaleTimeString('de-CH', { hour: '2-digit', minute:'2-digit' });
  
    document.getElementById('time').textContent = `Zürich (GMT+2) ${time}`;
  }
  
  setInterval(updateTime, 1000);

});
