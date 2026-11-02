import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5173
;

app.get("/api/health", (req,res) =>{
    res.status(200).json({
        success: true,
        message: "Server is running!"
    });
});

app.listen(PORT, ()=>{
    console.log(`Exetasis Server is running on port ${PORT}`);
});