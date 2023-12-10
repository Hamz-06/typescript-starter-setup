import { NextFunction, Request, Response } from "express"
import { Auth } from "./auth.js"

const isAuthenticatedRoute = (req: Request, res: Response, next: NextFunction) => {

    const seshionCookie: string = req.cookies.seshCookie
    if (!seshionCookie) {
        return res.status(403).json({
            error: { data: 'You are forbidden, please create an account' }
        })
    }
    try {
        Auth.verifyToken(seshionCookie)
    } catch (error) {
        return res.status(401).json({
            error: { data: 'You are unauthorized' }
        })
    }

    return next()
}

export { isAuthenticatedRoute }