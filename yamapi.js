var findInFiles = require('find-in-files');
var request = require('request');

function getSong() {
    var datetime = new Date();
    var promise = new Promise(function(resolve, reject) {
        findInFiles.find("PlayTrackInternalAsync", "C:/Users/" + require("os").userInfo().username + "/AppData/Local/Packages/A025C540.Yandex.Music_vfvw9svesycw6/LocalCache/Logs", "log" + datetime.toISOString().slice(0, 10).replaceAll("-", "") + ".txt").then(function(results) {
            var b = results[Object.keys(results)[0]];
            var regex = /(\d+)\: (.*) ~ (.*)/gm;
            var c = JSON.parse(b.line[b.count - 1]).Track;
            var ret = regex.exec(c);
            var song = {
                id: ret[1],
                author: ret[2],
                name: ret[3]
            };
            request('https://api.music.yandex.net/tracks/' + song.id, function(error, response, body) {
                song.img = "https://" + JSON.parse(body).result[0].coverUri.replaceAll("%%", "200x200")
                resolve(song);
            });
        })
    })
    return promise;
}
exports.getSong = getSong;