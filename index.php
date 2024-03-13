<!-- 

Made by Schwizer Design GmbH
Say hello @ schwizerdesign.ch
Version 1.0

-->

<!DOCTYPE html>
<html lang="de">
<head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# place: http://ogp.me/ns/place#">

    <meta charset="UTF-8">
    <title>Funk Global Risk Consensus</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <meta name="description" content="Der Funk Global Risk Consensus ist eine Zusammenstellung von fünf jährlich wiederkehrenden Studien und Risikoreporten, die eine Bewertung der globalen Risiken für Unternehmen bieten. Diese neutrale Bewertung der globalen Unternehmensrisiken dient Risikomanagern als Vergleich mit ihrer eigenen Risikoerfahrung und unterstützt sie bei zukünftigen Risikobewertungen.">
    <meta name="author" content="Funk Gruppe">
    <link rel="canonical" href="https://funk-global-risk-consensus.com" />
    
    <meta name="robots" content="index, follow" /> 
    <meta http-equiv="cache-control" content="max-age=0" />
    <meta http-equiv="cache-control" content="no-cache" />
    <meta http-equiv="expires" content="0" />
    <meta http-equiv="pragma" content="no-cache" />

    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="manifest" href="/site.webmanifest">
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#848484">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="theme-color" content="#ffffff">

    <meta property="og:title" content="Funk Global Risk Consensus">
    <meta property="og:description" content="Der Funk Global Risk Consensus ist eine Zusammenstellung von fünf jährlich wiederkehrenden Studien und Risikoreporten, die eine Bewertung der globalen Risiken für Unternehmen bieten. Diese neutrale Bewertung der globalen Unternehmensrisiken dient Risikomanagern als Vergleich mit ihrer eigenen Risikoerfahrung und unterstützt sie bei zukünftigen Risikobewertungen.">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://funk-global-risk-consensus.com">
    <meta property="og:image" content="https://funk-global-risk-consensus.com/img/og-image.jpg">
    <meta property="og:locale" content="de_CH">

    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Funk Global Risk Consensus">
    <meta name="twitter:description" content="Der Funk Global Risk Consensus ist eine Zusammenstellung von fünf jährlich wiederkehrenden Studien und Risikoreporten, die eine Bewertung der globalen Risiken für Unternehmen bieten. Diese neutrale Bewertung der globalen Unternehmensrisiken dient Risikomanagern als Vergleich mit ihrer eigenen Risikoerfahrung und unterstützt sie bei zukünftigen Risikobewertungen.">
    <meta name="twitter:image" content="https://funk-global-risk-consensus.com/img/twitter-image.jpg">

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

    <div class="navyearscont">
        <div class="navyears">
        <div class="navglobal start">
            <button class="menuBtn bg">
                <span id="icon-menu" class="material-symbols-outlined ">menu</span>
                <span id="icon-close" class="material-symbols-outlined ">close</span>
            </button>
        </div>
            <button class="arrow-button left bg">
                <span id="icon-menu" class="material-symbols-outlined ">chevron_left</span>
            </button>
            <div class="buttons years">
                <button data-year="2017">2017</button>
                <button data-year="2018">2018</button>
                <button data-year="2019">2019</button>
                <button data-year="2020">2020</button>
                <button data-year="2021">2021</button>
                <button data-year="2022">2022</button>
                <button data-year="2023">2023</button>
                <button data-year="2024" class="active">2024</button>
            </div>
            <?php require_once 'supernav.php'; ?>
        </div> 
    </div>
    
    <!-- Risiken - Globale Events - Trend -->
    <div class="riskseventstrends">
        <div class="crisks">
            <h2>Top Risiken</h2>
            <div class="risks"></div>
        </div>
        <div class="cgeventstrends">
            <div class="cgevents">
                <h2>Globale Events</h2>
                <div class="gevents"></div>
                <button class="gewBtn">Mehr Events</button>
            </div>
            <!-- <div class="ctrends">
                <h2>Trend 2024</h2>
                <div class="trends">
                    <a href="trend" class="trend bg">
                        <div class="trendtitle">
                            <h1>Funk Risiko Vorhersage Expertenmeinung</h1>
                        </div>
                    </a>
                </div>
            </div> -->
        </div>
    </div>

            
    <?php require_once 'nav.php'; ?>
    <?php require_once 'footer.php'; ?>
    
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="main.js"></script>
    <script src="risikenevents.js"></script>
    <?php require_once 'googleanalytics.php'; ?>
</body>
</html>
