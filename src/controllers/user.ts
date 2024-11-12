import { Request, Response } from "express";
import bcrypt from "bcrypt"
import Bookshelf from "../config/bookshelf"
import UserModel from "../model/user";
import jwt from "jsonwebtoken";

export const createUser = async (req: Request, res: Response): Promise<any> => {
    try {
        const { name, email, password, phone } = req.body;

        if (!name || !email || !password || !phone) return res.status(400).json({ msg: "Please Provide the required data.", status: false, result: [] })
        const pass: string = bcrypt.hashSync(password, 10);

        req.body.password = pass;
        const userData = await new UserModel(req.body).save();
        return res.json({ msg: "User Created", status: true, result: [] })

    } catch (error) {
        return res.status(500).json({ msg: "Server Error", status: false, result: [] })
    }
}

export const login = async (req: Request, res: Response): Promise<any> => {
    try {
        const { email, password } = req.body;
        if (!email || !password) return res.status(400).json({ msg: "Please Provide the required data.", status: false, result: [] })

        // const user:any = await UserModel.where({ email }).fetch();
        let user: any = await Bookshelf.knex.raw(`select * from users where email = '${email}'`);
        if (user.rows.lenght) return res.status(404).json({ msg: "User Not Found", status: false, result: [] })

        user = user.rows[0];


        const isUser: boolean = bcrypt.compareSync(password, user.password);
        if (!isUser) return res.status(401).json({ msg: "Invalide password ", status: false, result: [] })

        const token = jwt.sign({ id: user.id }, "absourabhsdfhbs");
        return res.json({ msg: "User Created", status: true, result: [], token });

    } catch (error) {
        return res.status(500).json({ msg: "Server Error", status: false, result: [] })
    }
}

export const getUser = async (req: Request, res: Response): Promise<any> => {
    try {
        let user: any = await Bookshelf.knex.raw(`select * from users limit 100`);
        if (user.rows.lenght) return res.status(404).json({ msg: "User Not Found", status: false, result: [] })

        return res.json({ msg: "User Created", status: true, result: user.rows });

    } catch (error) {
        return res.status(500).json({ msg: "Server Error", status: false, result: [] })
    }
}