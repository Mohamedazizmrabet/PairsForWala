import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function addStudentsToUserTable(students: string[]) {
  for (const student of students) {
    const [firstName, lastName] = student.split(" ");
    await prisma.user.create({
      data: {
        firstName:firstName,
        lastName:lastName,
      },
    })
  }
}

export async function main() {
  // const students = [
  //   "Achref Bey",
  //   "Adib Jaziri",
  //   "Ahmed Souhaiel",
  //   "Ahmed Boukhallout",
  //   "Ali Maatoug",
  //   "AslenBen othmen",
  //   "Aymen Lahrech",
  //   "Eya Attafi",
  //   "Farah Kharbech",
  //   "HamzaBen Jemaa",
  //   "Houssem Boulaares",
  //   "Ilhem Souid",
  //   "ines jannedi",
  //   "inesse Omrani",
  //   "Khalil Bouarrouj",
  //   "Louay Sakli",
  //   "Malek Aloui",
  //   "Manel Bouzidi",
  //   "Marwa Zbidi",
  //   "Mohamed Chokri",
  //   "Mohamed Gamoudi",
  //   "Mohamed Mrabet",
  //   "MohamedAli Ladhibi",
  //   "MohamedAli Gharbi",
  //   "MohamedAmine Hammami",
  //   "MohamedAmine Guezmir",
  //   "Mohamedamine Merdessi",
  //   "MohamedAziz Chanoufi",
  //   "MohamedFares Chaouali",
  //   "Mouhib Aroua",
  //   "Nourhene Abidi",
  //   "Oussema Cherif",
  //   "Rahma Aliani",
  //   "Riadh Loudhaief",
  //   "Saifeddine Mnasri",
  //   "Salah Hlel",
  //   "Salah Mbarki",
  //   "Salmen Khelifi",
  //   "Selim Hanchaoui",
  //   "Selimben slim",
  //   "Tasnime Ouertani",
  //   "Tasnime Boukhaddeja",
  //   "Wael Cherif",
  //   "Wael Bedoui",
  //   "Youssef naili",
  //   "Zakaria askri",
  //   "Bassem Ammar",
  // ];

  //   await addStudentsToUserTable(students)

  const users = await prisma.user.findMany();
  return users;
}
export async function getAllPairs() {
    try {
        // const pairs = await prisma.pair.findMany();
        const pairs = await prisma.pair.findMany({
          select: {
            pairs: true,
          },
        });
        return pairs;
        
    } catch (error) {
        console.log(error);
        
    }
  }
  
export async function disconnectDatabase() {
  await prisma.$disconnect();
}

export async function createPairs(array:any){
  try {
    const newPairs = await prisma.pair.create({
      data:{
        pairs:array
      }
    });
    if(!newPairs)  throw new Error("error with creating of pairs")
    else return newPairs
  } catch (error) {
    console.log(error);
    
  }
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })