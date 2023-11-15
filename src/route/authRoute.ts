import express, { Request, Response } from "express";
import { isAuthenticatedRoute } from "../auth/middleware.js";
import { Auth } from "../auth/auth.js";

const router = express.Router();

router.get('/verify-otp',isAuthenticatedRoute, (req:Request, res: Response) => {

    console.log(req.query.isSad)
    res.status(200).json({
        data:{ message: 'You are authenticated'}
    })
})

router.post('/generate-otp/:id', (req:Request, res: Response) => {

    const userId = req.params.id
    if(!userId) return res.status(400).json({data:{message: 'Please provide a user id'}})
    const userOtp = Auth.generateToken(userId)
    
    res.cookie("seshCookie",userOtp)

    res.status(200).json({
        data:{ userotp: userOtp}
    })
})

export default router;

