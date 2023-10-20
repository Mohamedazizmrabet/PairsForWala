import express,{Request,Response} from 'express'
import {disconnectDatabase,main,getAllPairs,createPairs,addStudentsToUserTable } from './db/prisma/script'
import routeStudent from "./routes/students" 
import cors from 'cors'
import {generatePair} from  './functions/generate'

const app = express();
app.use(express.json())
const port =3000
app.use(cors())
app.use(express.json())
app.get('/', async (req:Request, res:Response) => {
    try {
        const students=await main()
        res.json(students)
        
    } catch (error) {
        res.status(404).send("error getting students")
    }
})
app.get('/genarate/pairs', async (req:Request, res:Response) =>{
    try {
        const students=await main()

        const AllPairs =await getAllPairs()
        console.log("AllPairs",AllPairs);
        
        const result= generatePair(students, AllPairs)
        console.log(result);
        createPairs(result)
        res.json(result)
        
    } catch (error) {
        console.log(error);
        
        res.status(404).send("error getting students")
    }
})
app.use("/student",routeStudent)
app.listen(port, () => {
   console.log("server listening on port"+port);
   
  });
  process.on('SIGINT', async () => {
    await disconnectDatabase();
    process.exit();
  });