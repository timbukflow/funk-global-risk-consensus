<!DOCTYPE html>
<html lang="de">
<head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# place: http://ogp.me/ns/place#">

    <meta charset="UTF-8">
    <title>Funk Global Risk Consensus | Extreme Wetterereignisse</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <meta name="description" content=".........">
    <meta name="author" content="Funk Gruppe">
    <link rel="canonical" href="https://funk-global-risk-consensus.ch/extreme-wetterereignisse" />
    
    <meta name="robots" content="index, follow" /> 
    <meta http-equiv="cache-control" content="max-age=0" />
    <meta http-equiv="cache-control" content="no-cache" />
    <meta http-equiv="expires" content="0" />
    <meta http-equiv="pragma" content="no-cache" />


    <meta property="og:title" content="Funk Global Risk Consensus">
    <meta property="og:description" content=".........">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://www.funk-global-risk-consensus.ch">
    <meta property="og:image" content="https://www.funk-global-risk-consensus.ch/img/og-image.jpg">
    <meta property="og:locale" content="de_CH">

    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Funk Global Risk Consensus">
    <meta name="twitter:description" content=".........">
    <meta name="twitter:image" content="https://www.funk-global-risk-consensus.ch/img/twitter-image.jpg">

    <meta name="format-detection" content="telephone=yes">
    <meta property="business:contact_data:street_address" content="Hagenholzstrasse 56">
    <meta property="business:contact_data:locality" content="Zürich">
    <meta property="business:contact_data:region" content="8050">
    <meta property="business:contact_data:postal_code" content="8050">
    <meta property="business:contact_data:country_name" content="Switzerland">

    <link rel="stylesheet" href="main.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;600&family=Noto+Serif&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
</head>

<body>

    <div class="navglobal">
        <button class="menuBtn bg">
            <span id="icon-menu" class="material-symbols-outlined ">menu</span>
            <span id="icon-close" class="material-symbols-outlined ">close</span>
        </button>
        <a href="index">
            <button class="backBtn bg">
                <span class="material-symbols-outlined">arrow_back</span>
            </button>
        </a>
    </div>
    <?php require_once 'supernav.php'; ?>

    <div class="rdmain">
        <div class="rdeinleitung">
            <div class="item60 bg">
                <div class="rdimg">
                      <img src="img/funk-global-risk-consensus-extreme-wetterereignisse.jpg" alt="">
                </div>
                <div class="rdcontent">
                    <h1>Extreme Wetterereignisse</h1>
                    <p>Starkregen, Dürren, Hurricanes, etc. Wir hören fast jeden Tag von einer Katastrophe die sich irgendwo auf der Welt ereignet. Menschen verlieren Ihre Lebensgrundlage, Ihr Zuhause oder sogar Ihr Leben. Das Wetter spielt aber nicht nur irgendwo auf der Welt verrückt, auch bei uns in Europa oder sogar in der Schweiz gibt es immer wieder extreme Wetterereignisse die Tod und Zerstörung mit sich bringen.</p>
                    <p class="hidden-text">Betroffen sind aber nicht nur Privatpersonen, auch Firmen werden mit diesen Gefahren konfrontiert. Innert Minuten steht die Fabrikhalle unter Wasser, eine Schlammlawine reisst das Bürogebäude mit oder nach einem Blitzschlag brennt die Lagerhalle ab. Die Frequenz und Intensität solcher Wetterereignisse nimmt global stark zu und mehr und mehr Menschen und Firmen sind betroffen</p>
                    <button class="mBtn" data-open="true">mehr</button>      
                </div>
            </div>
            <div class="item40 bg">
                <h2>Entwicklung des Risikos</h2>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua</p>
                <canvas id="entwicklung-ew"></canvas>
                <p class="dquelle">Quelle: Lorem Ipsum dolores</p>
            </div>
        </div>

        <div class="rdcontainer">
            <!-- Interessante Fakten -->
            <div class="rdcfakten">
                <h2>Interessante Fakten</h2>
                <div class="item100 bg">
                    <h1>500 Milliarden Schaden</h1>
                    <p>Extreme Wetterereignisse haben in den letzten 40 Jahren (1980-2020) in Europa (EEA-32 Länder) über 500 Milliarden Schäden verursacht, wovon nur 116 Milliarden versichert waren. Ungefähr 142 tausend Menschen sind diesen Events zum Opfer gefallen.</p>
                    <div class="piecontainer">
                        <div class="pietest"><canvas id="pie-economic-losses"></canvas></div>
                        <div class="pietest"><canvas id="pie-insured-economic-losses"></canvas></div>
                        <div class="pietest"><canvas id="pie-fatalities"></canvas></div>
                    </div>
                    <div class="piedescription">
                        <p> 
                            <span style='background-color:#60A3D9;'></span> Hydrologische Ereignisse
                            <span style='background-color:#5487A6;'></span> Meteorologische Ereignisse
                            <span style='background-color:#A9977F;'></span> Klimatologische Ereignisse - Hitzewelle
                            <span style='background-color:#BFBFBF;'></span> Klimatologische Ereignisse - Andere
                        </p>
                        <p>Hydrologische Events beschreiben Hochwasser und Überschwemmungen, meteorologische Events sind Stürme, klimatologische Events sind Hitzewellen und andere klimatologische Events beschreiben Dürren, Kältewellen und extreme Feuchtperioden.</p>
                    </div>
                </div>
            </div>
            <!-- Abhängigkeit zu Events -->
            <div class="rdcevents">
                <h2>Abhängigkeit zu Events</h2>
                <div class="rdevents" id="container">
                    <div class="event bg">
                        <div class="eventimg">
                        <img src="img/funk-global-risk-consensus-event-buschfeuer-in-australien-2019-2020.jpg" alt="">
                        </div>
                        <div class="eventtitle">
                        <h1>Buschfeuer in Australien <br> 2019-2020</h1>
                        <p class="hidden-text">
                            Die Buschfeuer in Australien 2019-2020 waren eine der schlimmsten Feuerkatastrophen in der Geschichte des Landes. Die Brände begannen im Oktober 2019 und dauerten bis Februar 2020 an. 
                            <br><br>
                            Die Feuer breiteten sich in vielen Teilen des Landes aus, insbesondere in den Bundesstaaten New South Wales und Victoria, und zerstörten große Flächen von Wäldern, Buschland und Nationalparks. Es wird geschätzt, dass mehr als 10 Millionen Hektar Land verbrannt wurden, was ungefähr der Größe von Island entspricht. Viele Tierarten wurden durch die Feuer aus ihren Lebensräumen vertrieben und es wird angenommen, dass Hunderte von Millionen Tieren durch die Brände ums Leben gekommen sind. 
                            <br><br>
                            Die Feuer hatten auch schwerwiegende Auswirkungen auf die Gesundheit der Menschen in den betroffenen Gebieten. Die Luftqualität war in vielen Regionen aufgrund des Rauchs und der Asche stark beeinträchtigt, was zu gesundheitlichen Problemen bei der Bevölkerung führte.
                        </p>
                        <button class="bBtn" data-open="true">Bericht</button>
                        </div>
                    </div>
                    <div class="event bg">
                        <div class="eventimg">
                        <img src="img/funk-global-risk-consensus-event-jahrhunderthochwasser-in-deutschland-2021.jpg" alt="">
                        </div>
                        <div class="eventtitle">
                        <h1>Jahrhunderthochwasser in Deutschland - 2021</h1>
                        <p class="hidden-text">
                            Im Juli 2021 kam es in Teilen Deutschlands aufgrund starker Regenfälle zu einem verheerenden Hochwasser. Die Überschwemmungen trafen vor allem die Bundesländer Nordrhein-Westfalen und Rheinland-Pfalz, aber auch andere Regionen wie Bayern, Sachsen und Sachsen-Anhalt waren betroffen.
                            <br><br>
                            Die Flüsse Rhein, Mosel und deren Nebenflüsse sowie die Zuflüsse der Elbe führten aufgrund der Regenfälle ungewöhnlich viel Wasser, das teilweise weit über die Ufer trat und zahlreiche Ortschaften und Städte in den betroffenen Regionen überflutete.<br><br>
                            Die Schäden durch das Hochwasser waren enorm. Häuser, Straßen und Brücken wurden beschädigt oder zerstört, Autos und andere Fahrzeuge wurden fortgespült und es gab zahlreiche Tote und Verletzte.
                        </p>
                        <button class="bBtn" data-open="true">Bericht</button>
                        </div>
                    </div>
                    <div class="hidden-events">
                        <div class="event bg">
                            <div class="eventimg">
                            <img src="img/funk-global-risk-consensus-event-hurricane-ian-2022.jpg" alt="">
                            </div>
                            <div class="eventtitle">
                            <h1>Hurricane Ian <br> 2022</h1>
                            <p class="hidden-text">
                                Hurricane Ian wütete vom 23.-30 September 2022 in der Karibik und richtete grossflächige Zerstörung an. Die Windgeschwindigkeit erreichte bis 260km/h und somit war Ian ein Hurricane der Kategorie 5. Neben den starken Winden war die Sturmflut gepaart mit den sehr starken Niederschlägen und der langsamen Wanderung für die massiven Schäden verantwortlich. 
                                <br><br>
                                Insgesamt sind mindestens 160 Menschen ums Leben gekommen, 149 davon in Florida und Ian richtete Schäden von über 113 Milliarden Dollar an. Es war der tödlichste Hurricane in Florida seit 1935.
                            </p>
                            <button class="bBtn" data-open="true">Bericht</button>
                            </div>
                        </div>
                    </div>
                    <button class="ewBtn" data-open="true">Mehr Events</button>
                </div>
            </div>    
        </div>
        
        <div class="rdcontainer">
            <!-- Lösungen -->
            <div class="rdCsolution">
                <h2>Lösungen</h2>
                <div class="rdsolution bg">
                    <h1>Naturgefahren Risiko Analyse.</h1>
                    <p>
                        Funk untersucht Firmenstandorte auf Ihre Gefährdung durch Naturgefahren und die Wahrscheinlichkeit von Events. Aus den Firmenkennzahlen und Prozessen gemischt mit den Eintrittswahrscheinlichkeiten von Naturgefahren sowie derer Intensität können Höchstschadenssummen abgeleitet werden.
                        <br><br>
                        <strong>BU-Analyse.</strong> <br> Mit der BU-Analyse können die Umsatzeinbussen und Unterbrechungszeiten aufgrund von Naturgefahren und anderen Risiken ermittelt werden.
                    </p>
                    <button class="anfrageBtn">Anfragen</button>
                </div>
            </div>
            <!-- Kontakt -->
            <div class="rdCcontact">
                <h2>Ihr Risikospezialist</h2> 
                <div class="rdcontact bg">
                    <div class="contactimg">
                        <img src="img/funk-stefan-braendli.png" alt="">
                    </div>
                    <div class="contactdata">
                        
                        <p>
                            <strong>Stefan Brändli</strong><br>
                            Risk Analyst, MSc ERDW ETHZ <br>
                            <a href="tel:+41583110579">Telefon +41 58 311 05 79</a><br>
                        </p>
                        <a href="mailto:stefan.braendli@funk-gruppe.ch">
                            <button class="mailBtn">Mail</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  
    

            
    <?php require_once 'nav.php'; ?>
    <?php require_once 'footer.php'; ?>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="main.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script src="extreme-wetterereignisse.js"></script>

    
    <?php require_once 'googleanalytics.php'; ?>
</body>
</html>
