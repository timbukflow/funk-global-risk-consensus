$(document).ready(function() {
  
  // time
  function updateTime() {
    const now = new Date();
    const time = now.toLocaleTimeString('de-CH', { hour: '2-digit', minute:'2-digit' });
  
    document.getElementById('time').textContent = `Zürich (GMT+2) ${time}`;
  }
  
  setInterval(updateTime, 1000);

  // More Text
  $('.moreBtn').click(function() {
    const isOpen = $(this).attr('data-open') === 'true';
    const newText = isOpen ? 'Schliessen' : 'Bericht';

    $(this).text(newText);
    $(this).attr('data-open', !isOpen);

    $(this).prev('.hidden-text').slideToggle(700);
  });

});
