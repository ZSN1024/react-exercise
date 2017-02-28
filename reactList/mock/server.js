// mock server

let express = require('express');
let fs = require('fs');

let app = express();

let getUrls = [
    '/api/todos',
    '/api/user',
    '/api/countryList'
];

let postUrls = [
    '/api/userInfo'
];

for (let url of getUrls) {
    (function (url) {
        app.get(url, function (req, res) {
            fs.createReadStream(__dirname + url + '.json').pipe(res);
        });
    })(url);
}

app.get('／api／register', function (req, res) {
    fs.createReadStream(__dirname + url + '.json').pipe(res);
});

app.listen(8081, function () {
  console.log('mock server listening on port 8081...');
});