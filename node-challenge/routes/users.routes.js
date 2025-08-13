import { Router } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { usersMock } from '../mockData.js';

export const usersRouter = Router();

let users = [...usersMock];

// GET /api/users - obtener todos los usuarios
usersRouter.get('/', (req, res) => {
  res.status(200).json(users);
});

// GET /api/users/:id - obtener usuario por id
usersRouter.get('/:id', (req, res) => {
  const id = req.params.id;
  const userFound = users.find(u => u._id === id);

  if (!userFound) {
    return res.status(404).end();
  }

  res.status(200).json(userFound);
});

// POST /api/users - crear usuario
usersRouter.post('/', (req, res) => {
  if (!req.body.name) {
    return res.status(400).json({ error: 'name missing' });
  }

  const newUser = {
    _id: uuidv4(),
    name: req.body.name,
    email: req.body.email,
    rfc: req.body.rfc,
  };

  users.push(newUser);
  console.log(newUser)
  res.status(201).json(newUser);
});

// DELETE /api/users/:id - eliminar usuario
usersRouter.delete('/:id', (req, res) => {
  const userId = req.params.id;
  const index = users.findIndex(u => u._id === userId);

  if (index === -1) {
    return res.status(404).json({ message: 'User not found' });
  }

  users.splice(index, 1);

  res.status(200).end();
});
