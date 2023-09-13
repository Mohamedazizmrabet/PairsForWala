import express,{Request,Response} from 'express'
import {disconnectDatabase,main,getAllPairs } from './db/prisma/script'
import cors from 'cors'

const app = express();
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
        const AllPairs=await getAllPairs()
        res.json(AllPairs)
        
    } catch (error) {
        res.status(404).send("error getting students")
    }
})
app.listen(port, () => {
   console.log("server listening on port"+port);
   
  });
  process.on('SIGINT', async () => {
    await disconnectDatabase();
    process.exit();
  });