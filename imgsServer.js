"use strict";

const ht = require("http");

const server = ht.createServer(function (req, res) {
    res.write("this is a templete!");
    res.end();
});

server.listen(8080,function (error) {
    if(error){
        throw error;
    }
    console.log("server is started");
});