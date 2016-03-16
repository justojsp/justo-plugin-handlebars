[![Build Status](https://travis-ci.org/justojsp/justo-plugin-handlebars.svg?branch=master)](https://travis-ci.org/justojsp/justo-plugin-handlebars)

Plugin for *Handlebars* template system.

*Proudly made with ♥ in Valencia, Spain, EU.*

## Install

```
npm install justo-plugin-handlebars
```

## render task

To render a file:

```
render(opts, config)
```

The `config` properties:

- `src` (string). The template file.
- `dst` (string). The destination file.
- `scope` (object). The data.
- `helpers` (object). Custom helpers to use.
- `partials` (object). Custom partials to use.

Example:

```
const hbs = require("justo-plugin-handlebars");

hbs.render("Generate conf/mongod.conf", {
  src: "templates/conf/mongod.conf",
  dst: "/opt/mongodb/conf/mongod.conf",
  scope: {
    dataFolder: "/opt/mongodb/data/",
    logFolder: "/opt/mongodb/log/",
    journal: true
  }
});
```
