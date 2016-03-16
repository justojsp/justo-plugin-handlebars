"use strict";
var _justo = require("justo");


var NS = "org.justojs.plugin.handlebars";
var render;


module.exports = { 
  get render() {
    if (!render) render = (0, _justo.simple)({ ns: NS, name: "render" }, require("./lib/render").default);
    return render;} };