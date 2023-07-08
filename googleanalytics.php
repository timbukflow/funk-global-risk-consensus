<div id="cookiebanner" class="bg">
  <p>Wir verwenden Cookies, um Ihnen das beste Online-Erlebnis zu bieten. Mit Ihrer Zustimmung akzeptieren Sie die Verwendung von Cookies.</p>
  <button id="acceptBtn">Okay</button>
  <button id="declineBtn">Nein, danke</button>
</div>

<script async src="https://www.googletagmanager.com/gtag/js?id=G-2N5XW0GKCX"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag() {
        dataLayer.push(arguments);
    }
    gtag('js', new Date());

    var trackingID = 'G-2N5XW0GKCX';
    var disableString = 'ga-disable-' + trackingID;

    function accept() {
        var expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + 365);
        document.cookie = 'accepted=yes, i accept google analytics; expires=' + expirationDate.toUTCString() + '; path=/; SameSite=None; Secure';
        document.getElementById('cookiebanner').remove();
        gtag('config', trackingID, {
            'anonymize_ip': true,
            'allow_google_signals': false,
            'allow_ad_personalization_signals': false
        });
    }

    function decline() {
        var expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + 365);
        document.cookie = disableString + '=true; expires=' + expirationDate.toUTCString() + '; path=/; SameSite=None; Secure';
        document.getElementById('cookiebanner').remove();
    }

    function showBanner() {
        var banner = document.getElementById('cookiebanner');
        banner.classList.add('visible');
    }

    document.getElementById('acceptBtn').addEventListener('click', accept);
    document.getElementById('declineBtn').addEventListener('click', decline);

    if (document.cookie.indexOf(disableString + '=true') > -1) {
        window[disableString] = true;
        document.getElementById('cookiebanner').remove();
    } else if (document.cookie.indexOf('accepted=') >= 0) {
        accept();
    } else {
        setTimeout(showBanner, 3500);
    }
</script>

<!-- 

<div id="cookiebanner" class="bg">
  <p>Wir verwenden Cookies, um Ihnen das beste Online-Erlebnis zu bieten. Mit Ihrer Zustimmung akzeptieren Sie die Verwendung von Cookies.</p>
  <button id="acceptBtn">Okay</button>
  <button id="declineBtn">Nein, danke</button>
</div>

<script async src="https://www.googletagmanager.com/gtag/js?id=G-2N5XW0GKCX"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());

    const trackingID = 'G-2N5XW0GKCX';
    const disableString = 'ga-disable-' + trackingID;
    const cookiebanner = document.getElementById('cookiebanner');
    const acceptBtn = document.getElementById('acceptBtn');
    const declineBtn = document.getElementById('declineBtn');

    function setCookie(name, value, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    const expires = "expires="+ d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/;SameSite=Lax;Secure";
    }

    function getCookie(cname) {
    const name = cname + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') { c = c.substring(1); }
        if (c.indexOf(name) == 0) { return c.substring(name.length, c.length); }
    }
    return "";
    }

    function accept() {
    setCookie('accepted', 'yes, I accept google analytics', 1000);
    cookiebanner.remove();
    gtag('config', trackingID, { 'anonymize_ip': true, 'allow_google_signals': false, 'allow_ad_personalization_signals': false });
    }

    function decline() {
    setCookie(disableString, 'true', 1000);
    cookiebanner.remove();
    }

    acceptBtn.addEventListener('click', accept);
    declineBtn.addEventListener('click', decline);

    if (getCookie(disableString) === 'true') {
    window[disableString] = true;
    cookiebanner.remove();
    } else if (getCookie('accepted') === 'yes, I accept google analytics') {
    accept();
    } else {
    setTimeout(() => { cookiebanner.classList.add('visible'); }, 3500);
    }
</script> -->
