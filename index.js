//imports
import {simple} from "justo";

//internal data
const NS = "org.justojs.plugin.handlebars";
var render;

//api
module.exports = {
  get render() {
    if (!render) render = simple({ns: NS, name: "render"}, require("./lib/render").default);
    return render;
  }
};
