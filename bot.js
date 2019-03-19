let twit = require('twit');
let config = require('./config');
let Twitter = new twit(config);

let retweet = () => {
    let params = {
        q: '#nodejs, #Nodejs, #react , #React, #100DaysOfCode' ,
        result_type: 'recent',
        lang: 'en'
    }



    Twitter.get('search/tweets', params, function(err, data) {
        //errors handler
        if(!err) {
            // grab the id of tweet to retweet
            let retweetId = data.statuses[0].id_str;
            // retweet occur
            Twitter.post('statuses/retweet/:id', {
                id: retweetId
            }, function(err , response){
                if(response) {
                    console.log('Retweet successful!!!!!!!!!!!');
                }
                // if error occur
                if(err) {
                    console.log('Something went wrong while trying to Reweet ......')
                }
            });
        }
        // tweet not found
        else {
            console.log('something went wrong while Searching....')
        }
    });
}

// grab & retweet as soon as program is running...
retweet();
//time
setInterval(retweet,  3000000);