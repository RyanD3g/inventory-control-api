import express from 'express';
import cors from 'cors';
import 'reflect-metadata';
import './shared/index';

const app = express();

app.use(cors());
app.use(express.json());

export { app };
