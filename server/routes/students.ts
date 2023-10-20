import express from 'express';
import { Request, Response } from 'express';
import { addStudentsToUserTable } from '../db/prisma/script';

const router = express.Router();
router.use(express.json());
router.post('/add', async (req: Request, res: Response) => {
    try {
        const { students } = req.body;
        console.log("students",req.body);
        // await addStudentsToUserTable(students);
        res.status(200).send('Students added successfully');
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
});

export default router;
