const express = require("express");
const bodyParser = require("body-parser");
const routes = require("../routes");
const monrgan = require("morgan");

var server = null;

function start()
{
    try {
        const app = express();

        app.use(bodyParser.json());
        app.use(monrgan('dev'));
        app.use("/", routes);

        server = app.listen(3000);

        return true;
    } catch(e) {
        console.log("Error on start server");
        return false;
    }
}

function stop()
{
    if(server) {
        server.close();
    }
    return true;
}

module.exports = {start, stop}