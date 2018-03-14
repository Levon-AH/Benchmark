let hapi = require('hapi');


let server = hapi.server({
    host : 'localhost',
    port : '8000'
});


server.route({
    method : "POST",
    path : "/",
    handler : function (request , h) {
        return request.payload;
    }
});

async function start() {
    try {
      await server.start();
      console.log("hapi server running on port 8000");
    }
    catch (err){
        console.log(err);
        process.exit(1);
    }
}


start();