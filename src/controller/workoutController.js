
const workoutService = require('../services/workoutService');

const getAllWorkout = (req, res) => {
    const workouts = workoutService.getAllWorkout();
    res.send({ status: "ok", workouts });
};

const getOneWorkout = (req, res) => {
    const workout = workoutService.getOneWorkout();
    res
        .status(200)
        .send(`Get workout ${req.params.workoutId}`)
};

const createWorkout = (req, res) => {

    const { body } = req;

    if (
        !body.name ||
        !body.mode ||
        !body.equipment ||
        !body.exercises ||
        !body.trainerTips
    ) {
        return;
    }

    const newWorkout = {
        name: body.name,
        mode: body.mode,
        equipment: body.equipment,
        exercises: body.exercises,
        trainerTips: body.trainerTips,
    };

    const createdWorkout = workoutService.createWorkout(newWorkout);

    res
        .status(201)
        .json(createdWorkout);

    // res.send(`Create workout ${req.params.workoutId}`)
};

const updateWorkout = (req, res) => {
    const updatedWorkout = workoutService.updateWorkout();
    res.send(`Update workout ${req.params.workoutId}`)
};

const deleteWorkout = (req, res) => {
    workoutService.deleteWorkout();
    res.send(`Delete workout ${req.params.workoutId}`)
};


module.exports = {
    getAllWorkout,
    getOneWorkout,
    createWorkout,
    updateWorkout,
    deleteWorkout
};
