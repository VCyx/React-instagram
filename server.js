const express = require("express");
const history = require("connect-history-api-fallback");
require("dotenv-flow").config();
const app = express();

const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());

const staticFileMiddleware = express.static(__dirname + "/build");

app.use(staticFileMiddleware);
app.use(
  history({
    disableDotRule: true,
    verbose: true,
  })
);
app.use(staticFileMiddleware);

app.enable("trust proxy");
app.use(function (req, res, next) {
  if (req.secure) {
    next();
  } else {
    res.redirect("https://" + req.headers.host + req.url);
  }
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`app listening on port ${port}!`);
});
