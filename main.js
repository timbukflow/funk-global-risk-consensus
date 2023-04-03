$(document).ready(function() {
  // Aktivieren Sie den ersten Button
  $("#button1").addClass("active");

  // Rufen Sie die Funktion setBalkenSizes() auf, um die Größe der Balken für den aktiven Button festzulegen.
  setBalkenSizes([50, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60]);

  // Hinzufügen des Klick-Handlers für alle Buttons
  $("button").hover(function() {
    // Entfernen Sie die aktive Klasse von allen Buttons
    $("button").removeClass("active");
    // Fügen Sie die aktive Klasse nur für den geklickten Button hinzu
    $(this).addClass("active");

    // Rufen Sie die Funktion setBalkenSizes() auf, um die Größe der Balken für den aktiven Button festzulegen.
    if ($(this).attr("id") === "button1") {
      setBalkenSizes([50, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60]);
    } else if ($(this).attr("id") === "button2") {
      setBalkenSizes([100, 10, 20, 50, 30, 30, 40, 40, 50, 55, 60, 65]);
    } else if ($(this).attr("id") === "button3") {
      setBalkenSizes([10, 100, 50, 30, 35, 40, 45, 50, 55, 60, 65, 70]);
    } else if ($(this).attr("id") === "button4") {
      setBalkenSizes([20, 25, 50, 35, 40, 40, 50, 55, 60, 50, 70, 70]);
    } else if ($(this).attr("id") === "button5") {
      setBalkenSizes([25, 30, 35, 40, 50, 50, 55, 60, 65, 70, 75, 80]);
    }
  });


  $(".container").click(function() {
    // Entfernen Sie die aktive Klasse von allen Div-Elementen
    $(".content").removeClass("activecon");
    // Fügen Sie die aktive Klasse nur für das entsprechende Div-Element hinzu
    $($(this).data("target")).addClass("activecon");
  });

  $(".closer").click(function() {
    // Entfernen Sie die aktive Klasse von allen Div-Elementen
    $(".content").removeClass("activecon");

  
  });
});

function setBalkenSizes(sizes) {
  $(".balken").each(function(index) {
    $(this).css({
      "width": sizes[index] + "%",
      "transition": "width 0.5s ease"
    });
    $(this).find(".balken-label").text(sizes[index]);
  });
}
