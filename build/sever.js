"use strict";

require("dotenv/config");
require("./db.js");
var _express = _interopRequireDefault(require("express"));
var _morgan = _interopRequireDefault(require("morgan"));
var _rentalRouter = _interopRequireDefault(require("./routers/rentalRouter.js"));
var _cors = _interopRequireDefault(require("cors"));
var _foodsRouter = _interopRequireDefault(require("./routers/foodsRouter.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// console.log(process.env.DB_URL);
var PORT = 8080;
var app = (0, _express["default"])();
var corsOptions = {
  origin: ["http://localhost:3000", "https://64d070e34cc4d700094135dc--aesthetic-bavarois-68e6d6.netlify.app/"],
  methods: ["GET", "POST"],
  credentials: true
};
app.use((0, _cors["default"])(corsOptions));
app.use((0, _morgan["default"])("dev"));
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: true
}));
app.use("/api/rental", _rentalRouter["default"]);
app.use("/api/foods", _foodsRouter["default"]);

// app.get('/test', function (req, res) {
//   res.json({ok:"hello text"});
// });

var handleListening = function handleListening() {
  return console.log("\uD83D\uDE0DServer on port http://localhost:".concat(PORT));
};
app.listen(PORT, handleListening);