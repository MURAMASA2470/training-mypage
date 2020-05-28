const userAgent = window.navigator.userAgent.toLowerCase();
if(userAgent.indexOf('msie') != -1 || userAgent.indexOf('trident') != -1) {
  diffBrowserAlert();
} else if(userAgent.indexOf('edge') != -1) {
  diffBrowserAlert();
} else if(userAgent.indexOf('chrome') != -1) {

} else if(userAgent.indexOf('safari') != -1) {

} else if(userAgent.indexOf('firefox') != -1) {

} else if(userAgent.indexOf('opera') != -1) {

} else if(userAgent.indexOf('iphone') != -1) {
  noIphone()
} else if(userAgent.indexOf('ipad') != -1) {
  noIphone()
} else {
  diffBrowserAlert();
}

function diffBrowserAlert() {
  alert('Google ChromeかFireFoxかSafariで見て欲しいな...');
}

function noIphone() {
  alert('モバイルのSafariだとうまく表示されません... AndroidかPCで見てください..');
}