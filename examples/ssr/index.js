const express = require("express");
const { createElement } = require("react");
const { renderToString } = require("react-dom/server");
const { DemoComponent } = require("ReactShared");

// STATIC
const PORT = process.env.PORT || 5000;
const app = express();

// ROUTES
app.get("*", (req, res, next) => {
  const str = renderToString(createElement(DemoComponent));
  const html = `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Shared React Library</title>
        </head>
        <body>
          ${str}
        </body>
    </html>
    `;
  res.send(html);
});

// listen server
app.listen(PORT, () => {
  console.log("Server is running");
});
