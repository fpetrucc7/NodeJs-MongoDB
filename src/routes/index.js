import { Router } from 'express';
import verifyToken from '../middleware/usuarios.middleware';
import { requestLogin } from '../models/usuario.model';
import {
  getAll,
  createUser,
  deleteUser,
  updateUser,
} from '../controllers/usuario.controller';

const routes = new Router();

routes.get('/', (req, res) => {
  res.status(200).json({ ok: 'conected' });
});

routes.get('/usuario', verifyToken, getAll);

routes.post('/login', requestLogin);

routes.post('/usuario', verifyToken, createUser);

routes.delete('/usuario/:id', verifyToken, deleteUser);

routes.put('/usuario/:id', verifyToken, updateUser);

export default routes;
