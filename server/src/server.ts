import 'reflect-metadata';
import cors from 'cors';

import express, { NextFunction, Request, Response } from 'express';
import routes from './index.routes';
import './container'
import "./typeorm" 

const app = express();

app.use(express.json());
app.use(cors())
app.use(routes)

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  
  console.log(err);

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });

})

app.listen(3333, () => {
  console.log('Server started')
});