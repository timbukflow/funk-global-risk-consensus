<!DOCTYPE html>
<html lang="de">
<head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# place: http://ogp.me/ns/place#">

    <meta charset="UTF-8">
    <title>Funk Global Risk Consensus</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <meta name="description" content=".........">
    <meta name="author" content="Funk Gruppe">
    <link rel="canonical" href="https://funk-global-risk-consensus.ch" />
    
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

    <div class="navyearscont">
        <div class="navyears">
        <div class="navglobal time">
            <button class="menuBtn bg">
                <span id="icon-menu" class="material-symbols-outlined ">menu</span>
                <span id="icon-close" class="material-symbols-outlined ">close</span>
            </button>
        </div>
            <button class="arrow-button left "><img src="img/funk-arrow-left.svg" alt="menu" width="8px"></button>
            <div class="buttons years">
                <button data-year="2017">2017</button>
                <button data-year="2018">2018</button>
                <button data-year="2019">2019</button>
                <button data-year="2020">2020</button>
                <button data-year="2021">2021</button>
                <button data-year="2022">2022</button>
                <button data-year="2023" class="active">2023</button>
            </div>
            <button class="arrow-button right "><img src="img/funk-arrow-right.svg" alt="menu" width="8px"></button>
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
                <h2>Global Events</h2>
                <div class="gevents"></div>
                <button id="gewBtn">Mehr Events</button>
            </div>
            <div class="ctrends">
                <h2>Trend 2024</h2>
                <div class="trends">
                    <a href="trend" class="trend bg">
                        <div class="trendtitle">
                            <h1>Funk Risiko Vorhersage Expertenmeinung</h1>
                        </div>
                    </a>
                </div>
            </div>
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
