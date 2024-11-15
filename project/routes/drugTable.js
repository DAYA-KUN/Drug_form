import express from 'express';
import { getDrugTableData } from '../controllers/drugTableController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';

const router = express.Router();

// Route to fetch drug table data
router.get("/drug-table", authMiddleware, getDrugTableData);

export default router;
