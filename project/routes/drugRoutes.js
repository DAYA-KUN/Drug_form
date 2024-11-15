
import express from 'express';
import { addDrug, bulkUpload } from '../controllers/drugController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';
import multer from 'multer';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');  // Save to 'uploads' directory
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname); // Add a timestamp to prevent name conflicts
    },
});

const upload = multer({ dest: 'uploads/', storage: storage });
const router = express.Router();

router.post("/drug", authMiddleware, addDrug);
router.post("/bulk-upload", authMiddleware, upload.single("file"), bulkUpload);

export default router;
