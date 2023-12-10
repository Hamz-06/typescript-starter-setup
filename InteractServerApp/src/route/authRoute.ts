// docker compose up --build
import express, { Request, Response } from "express";
import { isAuthenticatedRoute } from "../auth/middleware.js";
import { Auth } from "../auth/auth.js";
import { randomUUID } from "crypto";

const router = express.Router();

router.get('/verify-otp', isAuthenticatedRoute, (req: Request, res: Response) => {
    console.log("log here")
    res.status(200).json({
        data: { message: 'You are authenticated' }
    })

})

router.post('/generate-otp', (req: Request, res: Response) => {


    const randomId = randomUUID()

    const userOtp = Auth.generateToken(randomId)
    res.cookie("seshCookie", userOtp)

    res.status(200).json({
        data: {
            userotp: userOtp,
            message: 'OTP generated successfully, you should recieve a cookie in your browser!'
        }
    })
})

router.get('/testx', (req: Request, res: Response) => {

    console.log("log here")
    console.log(process.env.FROM_ROOT_ENV)

    res.status(200).json({
        data: { message: 'You are authenticated' }
    })

})


export default router;

