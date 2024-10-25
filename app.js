const express = require('express');
const sequelize = require('./config/db.js');  // Import the Sequelize instance from db.js
const index = require("./routes/index")
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'pug');

// Sync database (optional: for first run)
sequelize.sync().then(() => console.log('Database synced')).catch(err => console.log(err));

app.use("/",index)

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
