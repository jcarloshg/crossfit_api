const express = require('express');
const v1workoutRoutes = require("./v1/routes/workoutRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/v1/workouts", v1workoutRoutes);

app.listen(PORT, () => { console.log(`🚀 server listen on Port ${PORT}`); });
