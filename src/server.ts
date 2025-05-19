import express, {json, Request, Response} from "express";

const port = process.env.PORT;
const app = express();

app.use(json())

app.get("/", (req:Request, res:Response)=>{
    res.status(200).json({player: "beckham"});
});

app.listen(port, ()=>{
    console.log(`🔥 Server Runing at port http://localhost:${port}`);
});