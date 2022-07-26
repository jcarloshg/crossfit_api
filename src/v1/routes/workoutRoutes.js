const express = require('express');
const router = express.Router();
const workoutController = require('../../controller/workoutController');

router
    .get("/", workoutController.getAllWorkout)
    .get("/:workoutId", workoutController.getOneWorkout)
    .post("/", workoutController.createWorkout)
    .patch("/:workoutId", workoutController.updateWorkout)
    .delete("/:workoutId", workoutController.deleteWorkout);

module.exports = router;