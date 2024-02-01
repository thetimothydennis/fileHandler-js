import express from "express";

const router = express.Router();

router.route("/api/auth/login")
    .post((req, res) => {
        let posted = "posted login route";
        console.log(req.body);
        console.log(posted);
        res.send(posted);
    })
    .get((req, res) => {
        let got = "got login route";
        console.log(got);
        res.send(got);
    })

router.route("/api/auth/register")
    .post((req, res) => {
        let posted = "posted register route";
        console.log(req.body);
        console.log(posted);
        res.send(posted);
    })
    .get((req,res) => {
        let got = "got register route";
        console.log(got);
        res.send(got);
    })

router.route("/api/auth/forgotpassword")
    .post((req, res) => {
        let posted = "posted forgot route";
        console.log(req.body);
        console.log(posted);
        res.send(posted);
    })
    .get((req, res) => {
        let got = "got forgot route";
        console.log(got);
        res.send(got);
    })

router.route("/api/auth/changepassword")
    .post((req, res) => {
        let posted = "posted change route";
        console.log(req.body);
        console.log(posted);
        res.send(posted)
    })
    .get((req, res) => {
        let got = "got change route";
        console.log(got);
        res.send(got)
    })

router.route("/api/auth/resetpassword")
    .post((req, res) => {
        let posted = "posted reset route";
        console.log(req.body);
        console.log(posted);
        res.send(posted);
    })
    .get((req, res) => {
        let got = "got reset route";
        console.log(got);
        res.send(got);
    })

export default router