let request = require('request');
let moment = require('moment');
let _ = require('underscore');

const options = {
    url : 'http://127.0.0.1:8000',
    method : 'POST',
    json: true,
    body: {
        a: new Buffer(10000)
    }

};


let average = 0;
let count = 10;
function reqEach(n) {
    let start = Date.now();
    let i = 0;
    _.map(_.range(5000), () => {
        request(options, function (err, res, body) {
            //console.log(res);
            i++;
            if (i === 5000) {
                // console.log(body);
                console.log(average, n);
                average += Date.now() - start;
                if (n === count) {
                    console.log(`**** ${average/count} ****`);
                    return;
                } else {
                    return reqEach(++n);
                }
            }
        });
    })
}

reqEach(1);
