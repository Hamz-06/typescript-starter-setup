
import jwt from 'jsonwebtoken';

export class Auth {

    static generateToken(payload: string): string {
        return jwt.sign(payload, process.env.JWT_SECRET as string);
    }

    static verifyToken(token: string): string | Error {
        try {
            return jwt.verify(token, process.env.JWT_SECRET as string) as string;
        } catch (error) {
            throw new Error('Invalid token');
        }
    }

}