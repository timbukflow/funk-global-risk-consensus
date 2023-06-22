$(document).ready(function() {
  
  // time
  function updateTime() {
    const now = new Date();
    const time = now.toLocaleTimeString('de-CH', { hour: '2-digit', minute:'2-digit' });
  
    document.getElementById('time').textContent = `Zürich (GMT+2) ${time}`;
  }
  setInterval(updateTime, 1000);

  // Kontakt Methode Quelle Imprssum
  $('.info-btn').click(function() {
    var targetId = $(this).data('target');
    var targetPanel = $('#' + targetId);
    fadeInPanel(targetPanel);
  });
  
  function fadeInPanel(panel) {
    $('#overlay').fadeIn();
    panel.fadeIn();
  
    panel.find('.close-button').click(function() {
      fadeOutPanel(panel);
    });
  
    $('#overlay').click(function() {
      fadeOutPanel(panel);
    });
  }
  
  function fadeOutPanel(panel) {
    $('#overlay').fadeOut();
    panel.fadeOut();
  }
  
  

  // Suppernav
  $('.menuBtn').click(function() {
    const isOpen = $(this).hasClass('active');
    $(this).toggleClass('active');

    if (isOpen) {
      $('#icon-menu', this).show();
      $('#icon-close', this).hide();
    } else {
      $('#icon-menu', this).hide();
      $('#icon-close', this).show();
    }

    $('.supernavcontainer').stop(true, true).fadeToggle(1000);
    $('body').toggleClass('supernavsc');
  });


  // Mehr Button
  $('.mBtn').click(function() {
    const isOpen = $(this).attr('data-open') === 'true';
    const newText = isOpen ? 'weniger' : 'mehr';

    $(this).text(newText);
    $(this).attr('data-open', !isOpen);

    $(this).prev('.hidden-text').slideToggle(700);
  });

  // Bericht Button
  $('.bBtn').click(function() {
    const isOpen = $(this).attr('data-open') === 'true';
    const newText = isOpen ? 'schliessen' : 'Bericht';

    $(this).text(newText);
    $(this).attr('data-open', !isOpen);

    $(this).prev('.hidden-text').slideToggle(700);
  });

  // Events Weitere Button
  $('.ewBtn').click(function() {
    const isOpenevent = $(this).attr('data-open') === 'true';
    const newTextevent = isOpenevent ? 'Weniger Events' : 'Mehr Events';

    $(this).text(newTextevent);
    $(this).attr('data-open', !isOpenevent);

    $(this).prev('.hidden-events').slideToggle(700);
  });


});
