import express from 'express';
import { Request, Response } from 'express';
import { addStudentsToUserTable } from '../db/prisma/script';
interface Students{
    firstName:string,
    middleName:string,
    lastName:string
}
const router = express.Router();
router.use(express.json());
router.post('/add', async (req: Request, res: Response) => {
    try {
        const { students} = req.body;
        console.log("students",students);
        await addStudentsToUserTable(makeObjOfStudentArray(students));
        res.status(200).send('Students added successfully');
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
});
const makeObjOfStudentArray=(arr:Students[])=>{
    return arr.map((el,i)=>{
      return   el.middleName ? el.firstName+el.middleName+" "+el.lastName : `${el.firstName} ${el.lastName}` 
    })
}
export default router;
