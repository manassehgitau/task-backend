import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js';
import taskRoutes from './routes/taskRoutes.js'

dotenv.config();
const app = express();
app.use(express.json());

const PORT = process.env.PORT;

connectDB();

app.get("/", (req, res) => res.send("Task API is running"));
app.use("/api/tasks", taskRoutes);
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
}) 



// TODO:create a tasks frontend 
// TODO:consume the get and post request`