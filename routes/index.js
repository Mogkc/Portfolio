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
                {
                    name: "Giphy Displayer",
                    img: "assets/imgs/GiphyProject.PNG",
                    github: "https://github.com/Mogkc/GifAPI",
                    deployed: "",
                    description: ""
                },
                {
                    name: "Elementary Hangman Game",
                    img: "assets/imgs/WordGuessGame.PNG",
                    github: "https://github.com/Mogkc/Word-Guess-Game",
                    deployed: "",
                    description: ""
                },
                {
                    name: "Math Game Using Randomization",
                    img: "assets/imgs/CrystalWager.PNG",
                    github: "https://github.com/Mogkc/sum-the-gems",
                    deployed: "",
                    description: ""
                },
                {
                    name: "Console Feature for Music Information",
                    img: "assets/imgs/no-args.PNG",
                    github: "https://github.com/Mogkc/liri-node-app",
                    deployed: "",
                    description: ""
                }
            ]
        });
    });

    app.get("*", (req, res) => {
        res.render("index", {});
    });
}