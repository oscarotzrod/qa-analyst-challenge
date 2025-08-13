import { Router } from 'express';
import { usersRouter } from './users.routes.js';

export const router = Router();

// localhost:3000/api/info
router.get('/info', (request, response) => {
  response.json({ message: 'API up' });
});

// localhost:3000/api/users
router.use('/users', usersRouter);
