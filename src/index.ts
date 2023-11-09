/* eslint-disable @typescript-eslint/no-unused-vars */

// import {v4} from 'uuid';
import { Chicken } from "./chicken.js";
import express, { Request, Response } from 'express'
import bodyParser from "body-parser";
import { Auth } from "./auth/auth.js";
import { isAuthenticatedRoute } from "./auth/middleware.js";
import cookieParser from 'cookie-parser'
// v4()
// const e =  express()
// console.log(e)

 // "start": "tsc && node dist/index.js",

// const chicken = new Chicken()

// chicken.cluck('chicken dinner')


const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(authRoute)

app.post('/verify-otp',isAuthenticatedRoute, (req:Request, res: Response) => {

    res.status(200).send({
        data:{ message: 'You are authenticated'}
    })
})

app.post('/generate-otp/:id', (req:Request, res: Response) => {

    const userId = req.params.id
    if(!userId) return res.status(400).send({data:{message: 'Please provide a user id'}})
    const userOtp = Auth.generateToken(userId)
    
    res.cookie("seshCookie",userOtp)

    res.status(200).send({
        data:{ userotp: userOtp}
    })
})


app.listen(3000, () => {`server is running on port ${3000}`})