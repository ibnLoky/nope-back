require('App')
var http = require('http');

async function GetSqlConnection()
{
    const { Client } = require('pg')
    const client = new Client()
    await client.connect()    
}

class RouteMyApi extends Route {

    @Route.Get({})
    async hello(ctx) {
        this.sendOk(ctx, ctx.state.__('hello'));
    }
}


http.createServer(function (req, res) {
    GetSqlConnection();
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("The date and time are currently:");
    res.end();
}).listen(8080);