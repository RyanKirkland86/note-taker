// dependencies
var express = require("express");
var path = require("path");
var fs = require("fs");

// set up express
var app = express();
var PORT = process.env.PORT || 3600;

// handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());