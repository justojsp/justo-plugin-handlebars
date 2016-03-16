//imports
const justo = require("justo");
const suite = justo.suite;
const test = justo.test;
const pkg = require("../../dist/es5/nodejs/justo-plugin-handlebars");

//suite
suite("API", function() {
  test("render", function() {
    pkg.render.must.be.instanceOf(Function);
  });
})();
