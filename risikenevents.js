const data = {
  "2023": {
    "risks": [
        {
          "name": "Cyber Risiken",
          "image": "img/funk-global-risk-consensus-cyber-risiken.jpg",
          "link": "cyber-risiken"
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
        }
    ],
    "events": [
        {
            "name": "Corona Virus",
            "image": "img/funk-global-risk-consensus-corona-virus.jpg",
            "link": "corona-virus"
        },
        {
          "name": "Ukraine Krieg",
          "image": "img/funk-global-risk-consensus-ukraine-krieg.jpg",
          "link": "ukraine-krieg"
      }
    ],
  },
  "2022": {
    "risks": [
        {
          "name": "Cyber Risiken",
          "image": "img/funk-global-risk-consensus-cyber-risiken.jpg",
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
          "image": "img/funk-global-risk-unguenstige-marktentwicklung.jpg",
          "link": "unguenstige-marktentwicklung"
        }
    ],
    "events": [
        {
            "name": "Corona Virus",
            "image": "img/funk-global-risk-consensus-corona-virus.jpg",
            "link": "corona-virus"
        },
        {
          "name": "Ukraine Krieg",
          "image": "img/funk-global-risk-consensus-ukraine-krieg.jpg",
          "link": "ukraine-krieg"
      }
    ],
  },
  "2017": {
      "risks": [
          {
            "name": "Cyber Risiken",
            "image": "img/funk-global-risk-consensus-cyber-risiken.jpg",
            "link": "cyber-risiken"
          },
          {
            "name": "Ungünstige Marktentwicklung",
            "image": "img/funk-global-risk-unguenstige-marktentwicklung.jpg",
            "link": "unguenstige-marktentwicklung"
          },
          {
            "name": "Politische Risiken",
            "image": "img/funk-global-risk-consensus-politische-risiken.jpg",
            "link": "politische-risiken"
          },
          {
            "name": "Naturkatastrophen",
            "image": "img/funk-global-risk-consensus-naturkatastrophen.jpg",
            "link": "naturkatastrophen"
          },
          {
            "name": "Von Menschen verursachte Katastrophen",
            "image": "img/funk-global-risk-consensus-von-menschen-verursachte-katastrophen.jpg",
            "link": "von-menschen-verursachte-katastrophen"
          }
      ],
      "events": [
          {
              "name": "Event 1",
              "image": "img/funk-global-risk-consensus-fachkraeftemangel.jpg",
              "link": "cyber-risiken"
          }
      ],
  },
  "2018": {
      "risks": [
          {
            "name": "Cyber Risiken",
            "image": "img/funk-global-risk-consensus-cyber-risiken.jpg",
            "link": "cyber-risiken"
          },
          {
            "name": "Neue Technologien",
            "image": "img/funk-global-risk-consensus-neue-technologien.jpg",
            "link": "neue-technologien"
          },
          {
            "name": "Ändernde Regulierungen",
            "image": "img/funk-global-risk-consensus-neue-technologien.jpg",
            "link": "neue-technologien"
          },
          {
            "name": "Neue Technologien",
            "image": "img/funk-global-risk-consensus-neue-technologien.jpg",
            "link": "neue-technologien"
          },
          {
            "name": "Neue Technologien",
            "image": "img/funk-global-risk-consensus-neue-technologien.jpg",
            "link": "neue-technologien"
          }
      ],
      "events": [
          {
              "name": "Event 1",
              "image": "images/event1.jpg",
              "link": "cyber-risiken"
          },
          {
            "name": "Event 2",
            "image": "images/event1.jpg",
            "link": "cyber-risiken"
        }
      ],
  },
};

$(document).ready(() => {
  const $risks = $(".risks");
  const $events = $(".events");
  const $yearButtons = $(".years button");

  function updateContent(year) {
      $risks.empty();
      $events.empty();

      const yearData = data[year];

      yearData.risks.forEach(risk => {
          $risks.append(`
              <a href="${risk.link}" class="risk">
                  <img src="${risk.image}" alt="${risk.name}">
                  <h1>${risk.name}</h1>
              </a>
          `);
      });

      yearData.events.forEach(event => {
          $events.append(`
              <div class="event">
                  <img src="${event.image}" alt="${event.name}">
                  <h1>${event.name}</h1>
              </div>
          `);
      });
  }

  $yearButtons.click(event => {
      const year = $(event.target).data("year");
      $yearButtons.removeClass("active");
      $(event.target).addClass("active");
      updateContent(year);
  });

  updateContent("2023");
});
