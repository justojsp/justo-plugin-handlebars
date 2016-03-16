//imports
const path = require("path");
const justo = require("justo");
const suite = justo.suite;
const test = justo.test;
const init = justo.init;
const fin = justo.fin;
const Dir = require("justo-fs").Dir;
const file = require("justo-assert-fs").file;
const op = require("../../../dist/es5/nodejs/justo-plugin-handlebars/lib/render").default;

//suite
suite("#op()", function() {
  const DATA = "test/unit/data";
  var DST, DST_DIR;

  init("*", function() {
    DST_DIR = Dir.createTmpDir();
    DST = DST_DIR.path;
  });

  fin("*", function() {
    DST_DIR.remove();
  });

  test("op(config) - condition is true", function() {
    op([{
      src: path.join(DATA, "test.hbs"),
      dst: path.join(DST, "test.txt"),
      scope: {
        cond: true
      }
    }]).must.be.eq(0);

    file(DST, "test.txt").must.exist();
    file(DST, "test.txt").text.must.be.eq("OK\n");
  });

  test("op(config) - condition is false", function() {
    op([{
      src: path.join(DATA, "test.hbs"),
      dst: path.join(DST, "test.txt"),
      scope: {
        cond: false
      }
    }]).must.be.eq(0);

    file(DST, "test.txt").must.exist();
    file(DST, "test.txt").text.must.be.eq("\n");
  });
})();
