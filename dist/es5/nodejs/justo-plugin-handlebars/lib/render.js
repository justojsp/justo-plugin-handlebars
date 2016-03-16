"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = 









op;var _justoHandlebars = require("justo-handlebars");var _justoFs = require("justo-fs");var hbs = new _justoHandlebars.Handlebars();function op(params) {

  if (params.length == 0) throw new Error("Render options expected.");else 
  if (params.length >= 1) params = params[0];


  new _justoFs.File(params.dst).text = hbs.renderFile(
  params.src, 
  { scope: params.scope }, 
  { helpers: params.helpers, partials: params.partials });



  return 0;}