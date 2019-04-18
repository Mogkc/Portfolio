module.exports = (app) => {
    app.get("/portfolio", (req, res) => {
        res.render("portfolio", {
            group: [
                {
                    name: "Solar Predictor",
                    img: "assets/imgs/SolarPredictor.PNG",
                    github: "https://github.com/Mogkc/Project1",
                    deployed: "",
                    description: ""
                },
                {
                    name: "Actualize Yourself",
                    img: "assets/imgs/ActualizeYourself.PNG",
                    github: "https://github.com/Neuromancer93/project-two",
                    deployed: "",
                    description: ""
                }
            ],
            personal: [
                {}
            ]
        });
    });

    app.get("*", (req, res) => {
        res.render("index", {});
    });
}