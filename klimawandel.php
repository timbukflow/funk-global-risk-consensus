<!DOCTYPE html>
<html lang="de">
<head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# place: http://ogp.me/ns/place#">

    <meta charset="UTF-8">
    <title>Funk Global Risk Consensus | Klimawandel </title>
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <meta name="description" content=".........">
    <meta name="author" content="Funk Gruppe">
    <link rel="canonical" href="https://funk-global-risk-consensus.ch/klimawandel" />
    
    <meta name="robots" content="index, follow" /> 
    <meta http-equiv="cache-control" content="max-age=0" />
    <meta http-equiv="cache-control" content="no-cache" />
    <meta http-equiv="expires" content="0" />
    <meta http-equiv="pragma" content="no-cache" />


    <meta property="og:title" content="Funk Global Risk Consensus | Klimawandel">
    <meta property="og:description" content=".........">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://www.funk-global-risk-consensus.ch">
    <meta property="og:image" content="https://www.funk-global-risk-consensus.ch/img/og-image.jpg">
    <meta property="og:locale" content="de_CH">

    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Funk Global Risk Consensus | Klimawandel">
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
    <?php require_once 'risknav.php'; ?>
    <?php require_once 'supernav.php'; ?>

    <div class="rdmain">
        <div class="rdeinleitung">
            <div class="item60 bg">
                <div class="rdimg">
                      <img src="img/funk-global-risk-consensus-risiko-klimawandel.jpg" alt="funk-global-risk-consensus-risiko-klimawandel">
                </div>
                <div class="rdcontent">
                    <h1>Klimawandel</h1>
                    <p>
                        <strong>Weltweites Phänomen</strong><br>
                        Die Veränderungen der klimatischen Bedingungen stellen in der einen oder anderen Form für alle Firmen ein grosses Risiko dar, das oft noch unterschätzt wird. Da der Klimawandel ein langsames, aber kontinuierliches Phänomen ist, ist es schwierig das Risiko greifbar zu machen.
                    </p>
                    <p class="hidden-text">
                        Global ändern sich durch den Klimawandel Niederschlagsmengen, Temperaturen und viele weitere Umweltfaktoren. Der Meeresspiegel steigt an, ganze Klimazonen verwüsten, während andere nie dagewesene Feuchtigkeit sehen. Klimatische Wettereffekte werden intensiviert, andere verschwinden ganz.<br><br>

                        <strong>Lieferketten genau beobachten</strong><br>
                        An einem bestimmten Standort mag es den Anschein haben, dass die Auswirkungen des Klimawandels nicht spürbar sind und das Risiko ignoriert werden kann. Jedoch könnte eine Fabrik eines Lieferanten aufgrund des steigenden Meeresspiegels bald von Überschwemmungen betroffen sein.<br><br>
                        In der Nahrungsmittelindustrie stellt der Klimawandel ein besonders hohes Risiko dar. Durch die Verschiebung der Klimazonen verändern sich das Niederschlagsverhalten und die Temperaturen in bestimmten Regionen. Dadurch kann es vorkommen, dass eine Region nicht mehr für die Zucht bestimmter Arten geeignet ist. Dies führt dazu, dass die gesamte Lieferkette umgestellt werden muss oder im schlimmsten Fall zusammenbricht.<br><br>

                        <strong>Intensivierung von extremen Wetterereignissen</strong><br>
                        Auf lange Sicht führt der Klimawandel dazu, dass die Risiken bei den extremen Wetterereignissen weiter zunehmen. Höhere Luft- und Meerestemperaturen führen zu höheren energetischen Zuständen. Dies bedeutet, dass sich mehr Energie in Wettersystemen befinden, sei es Niederschlag (warme Luft kann mehr Feuchtigkeit speichern) oder stärkere Winde, da die Temperaturgradienten ausgeprägter sind.
                    </p>
                    <button class="mBtn" data-open="true">mehr</button>      
                </div>
            </div>

            <div class="item40 bg">
                <h2>Entwicklung des Risikos</h2>
                <p>In der Zeitreihe wird die Dynamik des Risikos über die Jahre hinweg aufgezeigt. Die Punkte zeigen die jeweilige Bewertung des Risikos im jährlich publizierten Funk Global Risk Consensus.</p>
                <canvas id="entwicklung-klimawandel"></canvas>
                <p class="dquelle info-btn " data-target="methode">Methode <span class="material-symbols-outlined ibtn">info</span></p>
            </div>
        </div>

        <div class="rdcontainer">
            <!-- Interessante Fakten -->
            <div class="rdcfakten">
                <h2>Interessante Fakten</h2>
                <div class="fakten bg">
                    <h1>Atmosphärentemperatur</h1>
                    <p>Die folgende Grafik zeigt die jährliche Atmosphärentemperatur in Relation zur Durchschnittstemperatur zwischen 1901 und 2000.</p>
                    <canvas id="kw-grafik-01"></canvas>
                    <p class="dquelle">Quelle: NOAA</p>
                </div>
            </div>
            <!-- Abhängigkeit zu Events -->
            <div class="rdcevents">
                <h2>Abhängigkeit zu Events</h2>
                <div class="rdevents" id="container">
                    <div class="event bg">
                        <div class="eventimg">
                            <img src="img/funk-global-risk-consensus-globale-events-covid-19-pandemie.jpg" alt="funk-global-risk-consensus-globale-events-covid-19-pandemie">
                        </div>
                        <div class="eventtitle globalevent ">
                            <h1>Covid-19</h1>
                            <a href="globale-events-wannacry">
                                <button class="geBtn">
                                    <span class="material-symbols-outlined">chevron_right</span>Global Event
                                </button>
                            </a>
                        </div>
                    </div>
                    <!-- hidden events -->
                    <div class="hidden-events">
                        ...
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
                    <h1>Folgt</h1>
                    <p>
                        Folgt
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
    <script src="klimawandel.js"></script>
    <?php require_once 'googleanalytics.php'; ?>
</body>
</html>
