/* eslint-disable @typescript-eslint/no-unused-vars */
// npm run any dist/webApp/webHandler  
// import {v4} from 'uuid';

import express, { Request, Response } from 'express'
import bodyParser from "body-parser";
import { Auth } from "@auth/auth.js";
import { isAuthenticatedRoute } from "@auth/middleware.js";
import cookieParser from 'cookie-parser'
import authRoute from "@route/authRoute.js";
import kafkaRoute from "@route/kafkaRoute.js";

const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/kafka', kafkaRoute)
app.use('/otp', authRoute)

app.listen(3000, () => console.log(`server is running on port ${3000}`))

export default app;