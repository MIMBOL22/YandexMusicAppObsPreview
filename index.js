var yamapi = require('yandexmusappapi');
var fs = require('fs');
var lastId;

function update() {
    yamapi.getSong().then((obj) => {
        if (lastId != obj.id) {
            fs.writeFile("obs.txt", obj.author + " - " + obj.name, function(err) {
                if (err) {
                    return console.log(err);
                }
                console.clear();
                console.log("TXT updated");
                lastId = obj.id
            });
        }
    })
}
let timerId = setInterval(update, 1000);