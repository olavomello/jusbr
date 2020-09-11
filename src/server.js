// Arguments
var args = process.argv.slice(2);
console.log(args);

const getScript = (url) => {
  return new Promise((resolve, reject) => {
    const http = require("http"),
      https = require("https");

    let client = http;

    if (url.toString().indexOf("https") === 0) client = https;

    // Options // headers

    const options = {
      headers: {
        scheme: "https",
        accept: "text/html",
        "accept-language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7,la;q=0.6",
        "cache-control": "max-age=0",
        "sec-fetch-dest": "document",
        "sec-fetch-mode": "navigate",
        "sec-fetch-site": "none",
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36",
      },
    };

    client
      .get(url, options, (resp) => {
        let data = "";
        resp.on("data", (chunk) => (data += chunk));
        resp.on("end", () => resolve(data));
      })
      .on("error", (err) => reject(err));
  });
};

(async (url) => {
  console.log(await getScript(url));
})("https://www.jusbrasil.com.br/busca?q=Olavo+Pereira+de+Mello+Neto");
