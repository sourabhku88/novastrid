import { Request, Response } from "express";
import * as fs from "fs";
import XLSX from "xlsx";
import path from "path"


export const importExcel = async (req: Request, res: Response): Promise<any> => {
    try {
        const fileData = fs.readFileSync(path.join(__dirname, "../../src/chat1.xlsx"), 'utf-8');
        let workbook = XLSX.read(fileData, { type: 'buffer' });

        let data = XLSX.utils.sheet_to_json(workbook.Sheets.Sheet1);

        return res.json({ msg: "User Created", status: true, result: data });

    } catch (error) {
        console.log(error)
        return res.status(500).json({ msg: "Server Error", status: false, result: [] })
    }
}