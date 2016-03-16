//imports
import {Handlebars} from "justo-handlebars";
import {File} from "justo-fs";

//internal data
const hbs = new Handlebars();

/**
 * Task operation.
 */
export default function op(params) {
  //(1) arguments
  if (params.length == 0) throw new Error("Render options expected.");
  else if (params.length >= 1) params = params[0];

  //(2) render
  new File(params.dst).text = hbs.renderFile(
    params.src,
    {scope: params.scope},
    {helpers: params.helpers, partials: params.partials}
  );

  //(3) return
  return 0;
}
