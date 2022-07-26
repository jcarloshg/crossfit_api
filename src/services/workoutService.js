
const { v4: uuid } = require('uuid');
const Workout = require("../database/Workout")

const getAllWorkout = () => {
    const workouts = Workout.getAllWorkouts();
    return workouts;
};

const getOneWorkout = () => {
    return;
};

const createWorkout = (newWorkout) => {
    const workOutToInsert = {
        id: uuid(),
        createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
        updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
        ...newWorkout,
    };
    const createdWorkout = Workout.createWorkout(workOutToInsert);

    return createdWorkout;
};

const updateWorkout = () => {
    return;
};

const deleteWorkout = () => {
    return;
};

module.exports = {
    getAllWorkout,
    getOneWorkout,
    createWorkout,
    updateWorkout,
    deleteWorkout
};