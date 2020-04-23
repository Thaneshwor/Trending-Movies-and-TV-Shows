import express from 'express';
import bodyParser from 'body-parser';
import 'babel-polyfill';
import cors from 'cors';

// import taskRoutes from './routes/favRouter';
// import userRoutes from './routes/userRoutes';

import dotenv from 'dotenv';

dotenv.config();
const app = express();

// Add middleware for parsing URL encoded bodies
app.use(cors());

// Add middleware for parsing JSON and urlencoded data and populating req.body
app.use(bodyParser.json());

// app.use('/api/', taskRoutes);
// app.use('/api/', userRoutes);

app.listen(process.env.PORT).on('listening', () => {
    console.log(`Server is live on Port: ${process.env.PORT}`)
});

export default app;
