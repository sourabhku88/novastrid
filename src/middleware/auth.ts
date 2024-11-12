import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from 'jsonwebtoken';

declare global {
    namespace Express {
        interface Request {
            user?: {
                id?: number,
                email?: string,
            }
        }
    }
}

interface Decode {
    id: number,
    email?: string | undefined,
}

export const authentication = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token: string | string[] | undefined = req.headers['x-api-key'];

        if (!token || Array.isArray(token)) return res.status(401).json({ status: false, msg: "Please Login", result: [] })

        const dcoded :any = jwt.verify(token, 'absourabhsdfhbs');
        if (!dcoded) return res.status(401).json({ status: false, msg: "Please Login", result: [] })
        const user: Decode = {
            id: dcoded.id,
            email: dcoded.email,
        }
        req.user = user;

        next();
    } catch (error) {
        res.status(401).json({ status: false, msg: "Please Login", result: [] })
    }
}