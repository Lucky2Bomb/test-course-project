module.exports = function(app) { 
    app.use("/", require("./routes/main.routes"));
} 