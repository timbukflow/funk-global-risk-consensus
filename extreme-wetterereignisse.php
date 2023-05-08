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
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400&family=Noto+Serif&display=swap" rel="stylesheet">
</head>

<body>

    <div class="navglobal">
        <button class="menu"><img src="img/funk-menu.svg" alt="menu" width="14px"></button>
        <a href="index">
            <button class="back">
                <img src="img/funk-arrow-left.svg" alt="menu" width="8px">
            </button>
        </a>
    </div>

    <div class="risikodetailcontainer">
        <div class="risikoeinleitung">
            <div class="risikobeschreibung bg">
                <h1>Extreme Wetterereignisse</h1>
                <p>Starkregen, Dürren, Hurricanes, etc. Wir hören fast jeden Tag von einer Katastrophe die sich irgendwo auf der Welt ereignet. Menschen verlieren Ihre Lebensgrundlage, Ihr Zuhause oder sogar Ihr Leben. Das Wetter spielt aber nicht nur irgendwo auf der Welt verrückt, auch bei uns in Europa oder sogar in der Schweiz gibt es immer wieder extreme Wetterereignisse die Tod und Zerstörung mit sich bringen. Betroffen sind aber nicht nur Privatpersonen, auch Firmen werden mit diesen Gefahren konfrontiert. Innert Minuten steht die Fabrikhalle unter Wasser, eine Schlammlawine reisst das Bürogebäude mit oder nach einem Blitzschlag brennt die Lagerhalle ab. Die Frequenz und Intensität solcher Wetterereignisse nimmt global stark zu und mehr und mehr Menschen und Firmen sind betroffen</p>
            </div>
            <div class="risikoentwicklung bg">
                <h2>Entwicklung des Risikos</h2>
                <canvas id="myChart"></canvas>
            </div>
        </div>
    </div>

    <div class="holder"></div>
    
    

            
    <?php require_once 'nav.php'; ?>
    <?php require_once 'footer.php'; ?>

    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script src="extreme-wetterereignisse.js"></script>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="main.js"></script>
    <?php require_once 'googleanalytics.php'; ?>
</body>
</html>
