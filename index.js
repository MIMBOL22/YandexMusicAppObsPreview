const yamapi = require('yandexmusappapi');
const fs = require('fs');

function update() {
    yamapi.getSong().then((obj) => {
        fs.writeFile("obs.txt", obj.author + " - " + obj.name, function(err) {
            if (err) {
                return console.log(err);
            }
            console.clear();
            console.log("TXT updated");
        });
    })
}
let timerId = setInterval(update, 1000);