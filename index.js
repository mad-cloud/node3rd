const express = require("express");
const app = express();
const middleware2 = (req, res, next) => {
    console.log("Middleware 1");
    next();
}

const middleware3 = (req, res, next) => {
    console.log("Middleware 2");
    next();
}

app.use(middleware3)

app.get("/", function (req, res) {
    res.send("Main Route");
});
app.get("/Page2", function (req, res) {
    res.send("Page 2 with middleware3");
});

app.get("/Page3", middleware2, function (req, res) {
    res.send("Page 3 with middleware2 and middleware3");
});
app.get("/Page4", function (req, res) {
    res.send("Page 4 with middleware3");
});
app.get("/Page5",middleware2, function (req, res) {
    res.send("Page 5 with middleware2 and middleware3");
});
app.listen(4001);
