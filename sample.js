var fetchMoviePoster = require('./douban').fetchMoviePoster;
var fs = require('fs');

fetchMoviePoster("dasdadsa", function(data){
    /*
    data is a buffer of movie's poster image
    if fetchPoster fails, data is null
     */

    if (data)
        fs.writeFileSync('poster.jpg', data);
    else {
        console.log("fetchPoster failed");
    }
});
