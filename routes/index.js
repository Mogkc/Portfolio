module.exports = (app) => {
    app.get("/portfolio", (req, res) => {
        res.render("portfolio", {
            project: [
                {
                    name: "Solar Predictor Group Project",
                    img: "assets/imgs/SolarPredictor.PNG",
                    github: "https://github.com/Mogkc/Project1",
                    deployed: "https://rm5565.github.io/Project1/",
                    description: ""
                },
                {
                    name: "Actualize Yourself Group Project",
                    img: "assets/imgs/ActualizeYourself.PNG",
                    github: "https://github.com/Neuromancer93/project-two",
                    deployed: "https://actualize-yourself.herokuapp.com",
                    description: ""
                },
                {
                    name: "Giphy Displayer",
                    img: "assets/imgs/GiphyProject.PNG",
                    github: "https://github.com/Mogkc/GifAPI",
                    deployed: "https://mogkc.github.io/GifAPI/",
                    description: ""
                },
                {
                    name: "Elementary Hangman Game",
                    img: "assets/imgs/WordGuessGame.PNG",
                    github: "https://github.com/Mogkc/Word-Guess-Game",
                    deployed: "https://mogkc.github.io/Word-Guess-Game/",
                    description: ""
                },
                {
                    name: "Math Game Using Randomization",
                    img: "assets/imgs/CrystalWager.PNG",
                    github: "https://github.com/Mogkc/sum-the-gems",
                    deployed: "https://mogkc.github.io/sum-the-gems/",
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