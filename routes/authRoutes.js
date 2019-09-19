const passport = require("passport");

module.exports = app => {
    app.get(
        "/auth/google",
        passport.authenticate("google", {
            scope: ["profile", "email"]
        }),
        (req, res) => {}
    );

    app.get(
        "/auth/google/callback",
        passport.authenticate("google"),
        (req, res) => {
            res.redirect("/");
        }
    );

    app.get("/auth/logout", (req, res) => {
        req.logout();
        res.redirect("/");
    });

    app.get("/api/user", (req, res) => {
        if (req.user) res.send(req.user);
    });
};
