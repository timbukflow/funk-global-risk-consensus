const data = {
  "2023": {
    "risks": [
        {
          "name": "Cyberrisiken",
          "image": "img/funk-global-risk-consensus-cyberrisiken.jpg",
          "link": "cyberrisiken"
        },
        {
          "name": "Inflation",
          "image": "img/funk-global-risk-consensus-inflation.jpg",
          "link": "inflation"
        },
        {
          "name": "Fachkräftemangel",
          "image": "img/funk-global-risk-consensus-fachkraeftemangel.jpg",
          "link": "fachkraeftemangel"
        },
        {
          "name": "Makroökonomische Veränderungen",
          "image": "img/funk-global-risk-consensus-makrooekonomische-veraenderungen.jpg",
          "link": "makrooekonomische-veraenderungen"
        },
        {
          "name": "Extreme Wetterereignisse",
          "image": "img/funk-global-risk-consensus-extreme-wetterereignisse.jpg",
          "link": "extreme-wetterereignisse"
        },
        {
          "name": "Nicht-Berufskrankheiten",
          "image": "img/funk-global-risk-consensus-nicht-berufskrankheiten.jpg",
          "link": "nicht-berufskrankheiten"
        }
    ],
    "events": [
        {
          "name": "Ukrainekrieg",
          "image": "img/funk-global-risk-consensus-globale-events-ukrainekrieg.jpg",
          "link": "globale-events-ukrainekrieg"
        },
        {
          "name": "Massiver Zinsanstieg",
          "image": "img/funk-global-risk-consensus-globale-events-massiver-zinsanstieg.jpg",
          "link": "globale-events-massiver-zinsanstieg"
        },
        {
          "name": "Handelskrieg",
          "image": "img/funk-global-risk-consensus-globale-events-handelskrieg.jpg",
          "link": "globale-events-handelskrieg"
        },
        {
          "name": "Bankenkrise",
          "image": "img/funk-global-risk-consensus-globale-events-bankenkrise.jpg",
          "link": "globale-events-bankenkrise"
        },
        {
          "name": "Ende Covid-19 Pandemie",
          "image": "img/funk-global-risk-consensus-globale-events-covid-19-pandemie.jpg",
          "link": "globale-events-covid-19-pandemie"
        }
    ],
  },
  "2022": {
    "risks": [
        {
          "name": "Cyber Risiken",
          "image": "img/funk-global-risk-consensus-cyberrisiken.jpg",
          "link": "cyber-risiken"
        },
        {
          "name": "Nicht-Berufskrankheiten",
          "image": "img/funk-global-risk-consensus-nicht-berufskrankheiten.jpg",
          "link": "nicht-berufskrankheiten"
        },
        {
          "name": "Klimawandel",
          "image": "img/funk-global-risk-consensus-klimawandel.jpg",
          "link": "klimawandel"
        },
        {
          "name": "Ändernde Regulierungen",
          "image": "img/funk-global-risk-consensus-aendernde-regulierungen.jpg",
          "link": "aendernde-regulierungen"
        },
        {
          "name": "Ungünstige Marktentwicklung",
          "image": "img/funk-global-risk-consensus-unguenstige-marktentwicklung.jpg",
          "link": "unguenstige-marktentwicklung"
        },
        {
          "name": "Extreme Wetterereignisse",
          "image": "img/funk-global-risk-consensus-extreme-wetterereignisse.jpg",
          "link": "extreme-wetterereignisse"
        }
    ],
    "events": [
        {
          "name": "Covid-19 Pandemie",
          "image": "img/funk-global-risk-consensus-globale-events-covid-19-pandemie.jpg",
          "link": "globale-events-covid-19-pandemie"
        },
        {
          "name": "Ukrainekrieg",
          "image": "img/funk-global-risk-consensus-globale-events-ukrainekrieg.jpg",
          "link": "globale-events-ukrainekrieg"
        },
        {
          "name": "Massiver Anstieg der Inflation",
          "image": "img/funk-global-risk-consensus-globale-events-massiver-anstieg-der-inflation.jpg",
          "link": "globale-events-massiver-anstieg-der-inflation"
        },
        {
          "name": "Verschärfung des Handelskrieges US-China",
          "image": "img/funk-global-risk-consensus-globale-events-verschaerfung-des-handelskrieges-us-china.jpg",
          "link": "globale-events-verschaerfung-des-handelskrieges-us-china"
        },
    ],
  },
  "2018": {
    "risks": [
    ],
    "events": [
      {
        "name": "WannaCry Ransomware",
        "image": "img/funk-global-risk-consensus-globale-events-wannacry-ransomware.jpg",
        "link": "globale-events-wannacry-ransomware"
      },
    ],
  },
  "2017": {
      "risks": [
      ],
      "events": [
        {
          "name": "WannaCry Ransomware",
          "image": "img/funk-global-risk-consensus-globale-events-wannacry-ransomware.jpg",
          "link": "globale-events-wannacry-ransomware"
        },
      ],
  },
};

$(document).ready(() => {
  const $risks = $(".risks");
  const $events = $(".gevents");
  const $yearButtons = $(".years button");

  function updateContent(year) {
    $risks.empty();
    $events.empty();

    const yearData = data[year];

    yearData.risks.forEach(risk => {
      $risks.append(`
          <a href="${risk.link}" class="risk bg">
            <div class="riskimg">
              <img src="${risk.image}" alt="${risk.name}">
            </div>
            <div class="risktitle">
              <h1>${risk.name}</h1>
            </div>
          </a>
      `);
    });

    yearData.events.forEach(event => {
      $events.append(`
          <a href="${event.link}" class="gevent bg">
              <div class="geventimg">
                <img src="${event.image}" alt="${event.name}">
              </div>
              <div class="geventtitle">
                <h1>${event.name}</h1>
              </div>
          </a>
      `);
    });

    toggleHiddenItems();
  }

  function toggleHiddenItems() {
    var $items = $('.gevent');
    var $geventsweitereBtn = $('#gewBtn');
  
    if ($items.length > 2) {
      $items.slice(0, 2).slideDown(1000);
      $items.slice(2).hide();
  
      $geventsweitereBtn.on('click', function() {
        $items.slice(2).slideToggle(1000);
        
        var currentText = $(this).text();
        var newText = (currentText === 'Mehr Events') ? 'Weniger Events' : 'Mehr Events';
        $(this).text(newText);
      });
  
      $geventsweitereBtn.show();
    } else {
      $items.slideDown(1000);
      $geventsweitereBtn.hide();
    }
  }


  

  $yearButtons.click(event => {
    const year = $(event.target).data("year");
    $yearButtons.removeClass("active");
    $(event.target).addClass("active");
    updateContent(year);
  });

  updateContent("2023");

  // Buttons Year

  const buttonsContainer = document.querySelector('.buttons');
  buttonsContainer.scrollLeft = buttonsContainer.scrollWidth;

  document.querySelector('.arrow-button.left').addEventListener('click', scrollLeft);
  document.querySelector('.arrow-button.right').addEventListener('click', scrollRight);

  function scrollLeft() {
    const buttonsContainer = document.querySelector('.buttons');
    buttonsContainer.scrollLeft -= buttonsContainer.offsetWidth;
  }

  function scrollRight() {
    const buttonsContainer = document.querySelector('.buttons');
    buttonsContainer.scrollLeft += buttonsContainer.offsetWidth;
  }

});
