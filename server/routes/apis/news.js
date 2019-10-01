const express = require("express");
const router = express.Router();
const pg = require("pg-promise")();
const config = require("config");

const db = pg(config.get("postgresURL"));

router.get("/brief", async (req, res, next) => {
    try{
        const result = await db.any("select ")
    }
});

module.exports = router;
