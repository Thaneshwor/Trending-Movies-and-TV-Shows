import express from 'express';
import { addFavourate, getAllFavourates, deleteFavourate } from '../controllers/favoriteMovSerController';
import verifyAuth from '../middlewares/verifyAuth';

const router = express.Router();

// favourate movies/series Router

router.post('/favorites', verifyAuth, addFavourate);
router.get('/favorites', verifyAuth, getAllFavourates);
router.delete('/favorites/:id', verifyAuth, deleteFavourate);

export default router;
