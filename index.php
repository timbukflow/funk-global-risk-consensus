<!--
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
schwizerdesign.ch ░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
-->
<!DOCTYPE html>
<html lang="de">
<head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# place: http://ogp.me/ns/place#">

    <meta charset="UTF-8">
    <title>Funk</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <meta name="description" content="">
    <meta name="author" content="Schwizer Design GmbH">
    <!-- <link rel="canonical" href="https://www.schwizerdesign.ch/index" /> -->
    
    <meta name="robots" content="index, follow" /> 
    <meta http-equiv="cache-control" content="max-age=0" />
    <meta http-equiv="cache-control" content="no-cache" />
    <meta http-equiv="expires" content="0" />
    <meta http-equiv="pragma" content="no-cache" />

    <link rel="stylesheet" href="main.css" />
</head>

<body>
    <button id="button1" class="active">Button 1</button>
    <button id="button2">Button 2</button>
    <button id="button3">Button 3</button>
    <button id="button4">Button 4</button>
    <button id="button5">Button 5</button>

    <div class="balken-container">
    <div class="container" data-target="#div1">
        <h1>01</h1>
        <div class="balken" id="balken1">
            <div class="balken-label">50</div>
        </div>
    </div>
    <div class="container" data-target="#div2">
        <h1>02</h1>
        <div class="balken" id="balken2">
            <div class="balken-label">10</div>
        </div>
    </div>
    <div>
        <h1>03</h1>
        <div class="balken" id="balken3">
            <div class="balken-label">15</div>
        </div>
    </div>
    
    <div class="balken" id="balken5">05</div>
    <div class="balken" id="balken6"></div>
    <div class="balken" id="balken7"></div>
    <div class="balken" id="balken8"></div>
    <div class="balken" id="balken9"></div>
    <div class="balken" id="balken10"></div>
    <div class="balken" id="balken11"></div>
    <div class="balken" id="balken12"></div>
    </div>

    <div id="div1" class="content">
    <h2>Div 1</h2>
    <p>Dies ist der Inhalt von Div 1.</p>
    <div class="closer">X</div>
    </div>

<div id="div2" class="content">
  <h2>Div 2</h2>
  <p>Dies ist der Inhalt von Div 2.</p>
  <div class="closer">X</div>
</div>




    
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.0/dist/js/bootstrap.min.js"></script>
    <script src="main.js"></script>
</body>
</html>
