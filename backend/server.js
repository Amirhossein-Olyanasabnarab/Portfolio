const express = require("express");
require("dotenv").config();

const PORT = process.env.PORT;
const app = express();

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})
