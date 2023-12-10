import express, { Request, Response } from "express";
import { isAuthenticatedRoute } from "@auth/middleware";
import kafkaInvoke from "@kafka/producer/producer";

const router = express.Router();

router.get('/invoke', isAuthenticatedRoute, async (req: Request, res: Response) => {

    try {
        await kafkaInvoke()

    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({
                error: { data: error.message }
            })
        }
    }

    res.status(200).json({
        data: { message: 'You have invoked kafka' }
    })

})

export default router;