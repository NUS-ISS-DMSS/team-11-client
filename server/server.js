const express = require('express') 
const app = express()

const db = require('./models')

db.sequelize.sync().then(() => {
    app.listen(8081, () => {
        console.log("Server running on port 8081");
    });
});
