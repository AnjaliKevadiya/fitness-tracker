const router = require("express").Router();
const db = require("../models/Workout");

router.get("/api/workouts", (req, res) => {
  db.find({}, (err, data) => {
    console.log(err);
    console.log(data);
    if (err) {
      res.json(err);
    } else {
      res.json(data);
    }
  });
});

module.exports = router;
