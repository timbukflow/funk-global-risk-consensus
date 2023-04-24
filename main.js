$(document).ready(function() {

  function updateTime() {
    // Erstelle ein neues Date-Objekt mit der aktuellen Zeit
    const now = new Date();
  
    // Erstelle einen neuen Date-Objekt mit der GMT+2-Zeitzone-Offset
    const offset = 2;
    const timezoneOffset = now.getTimezoneOffset() / 60;
    const gmt = new Date(now.getTime() + ((offset - timezoneOffset) * 60 * 60 * 1000));
  
    // Formatiere die Zeit und den Offset
    const time = gmt.toLocaleTimeString('de-CH', { hour12: false });
    const offsetString = `GMT+${offset.toString().padStart(2, '0')}`;
  
    // Aktualisiere das HTML mit der formatierten Zeit und dem Offset
    document.getElementById('time').textContent = `Zürich (${offsetString}) ${time}`;
  }
  
  // Aktualisiere die Uhrzeit alle 1 Sekunde
  setInterval(updateTime, 1000);

});
