const router = require("express").Router();
const Workout = require("../models/Workout.js");

// api route to get all the workouts
router.get("/api/workouts", (req, res) => {
  Workout.find({}, (err, data) => {
    console.log(err);
    console.log(data);
    if (err) {
      res.json(err);
    } else {
      res.json(data);
    }
  });
});

// api route to create new workout record to database
router.post("/api/workouts", ({ body }, res) => {
  console.log("body", body);

  const workout = new Workout(body);
  console.log("workout", workout);

  Workout.create(workout)
    .then((workoutData) => {
      console.log("workoutdata", workoutData);
      res.json(workoutData);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

module.exports = router;
