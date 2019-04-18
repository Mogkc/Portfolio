module.exports = (app) => {
    app.get("/portfolio", (req, res) => {
        res.sendFile("views/portfolio.html", { root: "./" });
    });
    
    app.get("*", (req, res) => {
        res.sendFile("views/index.html", { root: "./" });
    });
}