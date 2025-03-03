import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async (req ,res) => {
    //const {username , password , email, Full_name} = req.body
    // console.log("username: ", username);
    res.status(200).json({
        message: "ok"
    })
 })

 export{registerUser}