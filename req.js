let request = require('request');
let moment = require('moment');
let _ = require('underscore');

const options = {
    url : 'http://127.0.0.1:8080',
    method : 'POST',
    json: true,
    body: {
        a: new Buffer(10000)
    }

};

let start = Date.now();
let i = 0;
_.each(_.range(1000), () => {
    request(options, function (err, res, body) {
        //console.log(res);
        i++;
        if (i === 1000){
            // console.log(body);
            console.log(`***${Date.now() - start}***`);
        }
    });
});
console.log(Date.now() - start);