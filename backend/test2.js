const utf8 = require('utf8');

const mak = utf8.decode('fivhn ');
console.log(mak)

fetch("https://rasm.io/api/search?term=%D8%A8%D9%87%D8%B1%D8%A7%D8%AF%20%D8%B2%D8%A7%D8%B1%DB%8C&page=1&pagesize=5", {
  "headers": {
    "accept": "*/*",
    "accept-language": "en-US,en;q=0.9",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-requested-with": "XMLHttpRequest",
    "cookie": "_ga=GA1.2.1412757942.1593547535; _gid=GA1.2.487759402.1593547535; pushNotification-shownCount-6822=1; cookie_token-6822=0baa1551-9db2-4fc6-857e-93e3a9396769; cookie_matching=true; token_id-6822=eOy4FNonxWY:APA91bE7oEj5JBodU0ROuFZ97e4h2I-BYFKqPcY6lV43VjeVL8j5e9HR_cdaQJ49qqcLAc72a2Lrey4i4rmQ8XtymiF9jhiVGZ0aYEUnFiQpvTyjsCYNIa04HUlTQvZNgmbIA37Zvwh1; najva_last_active_time-6822=20200602; tlc=true; _gat_gtag_UA_69122602_1=1"
  },
  "referrer": "https://rasm.io/q/%D8%A8%D9%87%D8%B1%D8%A7%D8%AF%20%D8%B2%D8%A7%D8%B1%DB%8C",
  "referrerPolicy": "no-referrer-when-downgrade",
  "body": null,
  "method": "GET",
  "mode": "cors"
});