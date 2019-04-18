module.exports = (app) => {
    app.get("/portfolio", (req, res) => {
        res.render("portfolio", {});
    });
    
    app.get("*", (req, res) => {
        res.render("index", {});
    });
}