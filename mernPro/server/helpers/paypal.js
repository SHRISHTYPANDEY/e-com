const paypal = require('paypal-rest-sdk');

paypal.configure({
    mode : 'sandbox',
    client_id : 'AQr8oyZiDi4Ce70TLlYpu4d_D-fNRpL6YlcISpjrjEkQgWRVaxuTRlLFus_xslwa66jmGAJvhgeik9UZ',
    client_secret : 'EO_y9qZlnQrD01g2hBy6_dvrFsThKfV_WEwCYqtB6cDMPeXK_sRntCMsSE4r9SWah8yOgXQH9fezGpLb' 
});
module.exports = paypal;
