const express = require("express");
const BackendApp = express();

const PORT = 3200;

BackendApp.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});