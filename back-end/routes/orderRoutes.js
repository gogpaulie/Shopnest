import express from 'express';
const router = express.Router();
import { addOrderItems, getOrderById } from '../controllers/orderController.js';
import { protect } from '../middleware/authMiddleware.js';

router.route('/').post(protect, addOrderItems);
// Make sure routes with :id are at the bottom to avoid routes below
// it to search from an id
router.route('/:id').get(protect, getOrderById);

export default router;
