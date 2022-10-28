import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.redirect("/home")
});

router.get("/home", (req, res) => {
    res.send("Hello World!");
});

router.get("/*", (req, res) => {
    res.send("Hello World!");
});

router


module.exports = router;