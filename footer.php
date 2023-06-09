<footer>
    <ul>
        <li class="info-btn" data-target="methode">Methode</li>
        <li class="info-btn" data-target="quellen">Quellen</li>
        <li class="info-btn" data-target="impressum">Impressum</li>
    </ul>
</footer>

<div id="kontakt" class="fade-in-panel">
    <p>
        Funk Zürich <br>
        Hagenholzstrasse 56 <br>
        CH-8050 Zürich <br>
    </p>
    <a href="tel:041583110500">T +41 (0)58 311 05 00</a><br>
    <a href="#" onclick="decryptEmail('aW5mb0BmdW5rLWdydXBwZS5jaA==');">Mail</a><br>
    <a href="https://www.funk-gruppe.ch/de/" target="_blank">www.funk-gruppe.ch</a>
  <button class="close-button">Schliesen</button>
</div>

<div id="methode" class="fade-in-panel">
  <h2>methode</h2>
  <button class="close-button">Schließen</button>
</div>

<div id="quellen" class="fade-in-panel">
  <h2>quellen</h2>
  <button class="close-button">Schließen</button>
</div>

<div id="overlay"></div>

<script>
function decryptEmail(encodedEmail) {
  var email = atob(encodedEmail);
  window.location.href = 'mailto:' + email;
}
</script>

