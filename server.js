const express = require("express")
const app = express();
const PORT = process.env.PORT || 4762;

// Static routes for css, js, and image files
app.use(express.static("public"));

// Dynamic routes for html files
require("./routes")(app);

app.listen(PORT, () => {
    console.log(
        `Running on PORT: ${PORT}. Go to http://localhost:${PORT}`
    );
});