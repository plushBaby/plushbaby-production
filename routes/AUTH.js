import express from 'express';

import { signin, signup } from '../controllers/user.js'

const router = express.Router();

router.post('/signin', signin ); // form and data from sign in gets posted to the server
router.post('/signup', signup ); // form and data from sign up gets posted to the server

export default router;