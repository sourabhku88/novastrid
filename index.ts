import express, { Application } from "express";
import routs from "./src/routes/routs";
import importExcel from "./src/routes/importExcel";
const app: Application = express();
const PORT: number = 7800;


app.use(express.json());
app.use('/api/v1', routs);
app.use('/api/v1', importExcel);

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})