import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 5000;

app.get("/api/health", (req,res) =>{
    res.status(200).json({
        success: true,
        message: "Exetasis Server is running!"
    });
});

app.listen(PORT, ()=>{
    console.log(`Exetasis Server is running on port ${PORT}`);
});