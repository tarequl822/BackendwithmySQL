import "dotenv/config"; // Allows environment variables to be set on process.env
import {app} from './app.js'

// Listen on PC port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));


// import express from "express";
// import postRoutes from "./routers/postRouts.js";

// const app = express();

// // Middleware
// app.use(express.json()); // Parse JSON bodies in the request object

// // Redirect requests to endpoint starting with /posts to postRoutes.js
// app.use("/posts", postRoutes);

// // Global Error Handler (MUST start with err)
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   console.error(err.name);
//   console.error(err.code);

//   res.status(500).json({
//     message: "Something went really wrong",
//   });
// });