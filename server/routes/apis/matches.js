const express = require("express");
const router = express.Router();
const pg = require("pg-promise")();
const db = pg("postgres://postgres:root@localhost:5432/cricketalpha");

router.get('/recent', async (req, res, next) => {
    try {
        const result = await db.any("SELECT * FROM matches ORDER BY runs LIMIT 8;");
        res.status(200).json({
            status: 200,
            data: result,
            message: "Retrived 8 recent matches list successfully!!"
        });
    }
    catch (err) {
        console.log(err)
        next(err)
    }
});

module.exports = router;