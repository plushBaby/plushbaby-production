import express from 'express';

import { 
    makeAComment,
} from '../controllers/comments.js'

const router = express.Router();

router.post('/:id', makeAComment);

export default router;
