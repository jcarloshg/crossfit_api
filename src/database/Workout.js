const DB = require("./db.json");
const { saveToDataBase } = require("./utils");

const getAllWorkouts = () => {
    return DB.workouts;
}

const createWorkout = (newWorkout) => {

    const isAlreadyAdded = DB.workouts.find(
        (workout) => workout.name === newWorkout.name
    );

    if (isAlreadyAdded !== undefined) return "YA EXISTE";

    DB.workouts.push(newWorkout);
    saveToDataBase(DB);
    return newWorkout;
}

module.exports = {
    getAllWorkouts,
    createWorkout,
};