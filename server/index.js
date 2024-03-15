const express = require('express');
const app = express();

app.use(express.json());

const db = require('./models');

// Routers
const userRouter = require('./routes/Users');
app.use("/users", userRouter);

db.sequelize.sync().then(() => {
    app.listen(8081, () => {
        console.log("Server running on port 8081");
    });
});
