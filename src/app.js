import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app=express()

app.use(cors({ // it use for condition, cors did not give access unknown api(only cors_origin )
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit:"16kb"})) // limit json file sending from frontend to backend
app.use(express.urlencoded({
    extended:true ,// for nested object
    limit:"16kb"
}))
app.use(express.static("public"))// for store some file(if needed)
app.use(cookieParser())

// routes import

import userRouter from './routers/user.routes.js'
import postRoutes from './routers/postRouts.js'


// routes declaration
app.use("/api/v1/users", userRouter) // http://localhost:8000/users/register
app.use("/posts", postRoutes)


export{app};