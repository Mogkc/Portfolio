const portfolio = require("../data/portfolio.json")

module.exports = (app) => {
    app.get("/portfolio", (req, res) => {
        res.render("portfolio", portfolio);
    });

    app.get("*", (req, res) => {
        res.render("index", {});
    });
}