import express from 'express';
import User from '../models/User.js';

const router = express.Router();

router.use(express.json());

router.get('/', (req, res) => {
  res.send('API');
});

router.get('/users', async (req, res) => {
  const data = await User.find();
  res.status(200).json(data);
});

router.get('/users/:id', async (req, res) => {
  const data = await User.findById(req.params.id);
  res.status(200).json(data);
});



router.post('/users', async (req, res) => {

  const user = new User(req.body);
  const savedUser = await user.save();
  res.status(201).json(savedUser);
});

router.put('/users/:id', async (req, res) => {
  await User.findByIdAndUpdate(req.params.id, req.body);
  res.sendStatus(204);
});

router.delete('/users/:id', async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.sendStatus(204);
});



export default router;
