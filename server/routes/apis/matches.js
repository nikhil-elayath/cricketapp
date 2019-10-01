const express = require("express");
const router = express.Router();
const pg = require("pg-promise")();
const db = pg("postgres://postgres:root@localhost:5432/cricketalpha");

router.get('/recent/:date', async (req, res, next) => {
    try {
        date = req.params.date;
        console.log(typeof date);
        const result = await db.any(`SELECT * FROM matches where dates='${date}' ORDER BY runs;`);
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

router.get('/bydate', async (req, res, next) => {
    try {
        const result = await db.any("SELECT dates FROM matches ORDER BY dates;");
        res.status(200).json({
            status: 200,
            data: result,
            message: "Retrived all matches date ordered by date successfully!!"
        });
    }
    catch (err) {
        console.log(err)
        next(err)
    }
});

router.get('/summary/:id', async (req, res, next) => {
    try {
        id = req.params.id;
        console.log(typeof date);
        const result = await db.any(`SELECT * FROM matches where id='${id}';`);
        res.status(200).json({
            status: 200,
            data: result,
            message: "Retrived the specific match detail successfully!!"
        });
    }
    catch (err) {
        console.log(err)
        next(err)
    }
});
module.exports = router;